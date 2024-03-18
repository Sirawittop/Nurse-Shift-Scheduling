package main

import (
	"fmt"
	"log"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Login struct {
	ID       uint
	Username string
	Password string
	RoleID   uint
}

type User struct {
	ID              uint
	Hospital_id     uint
	Ward_id         uint
	Login_id        uint
	Nurse_level     uint
	Firstname       string
	Lastname        string
	Gender          string
	Phone           string
	Email           string
	Employment_year string
}

// Function to hash password
func hashPassword(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), 1)
	if err != nil {
		return "", err
	}
	return string(hashedPassword), nil
}

func insertLogin(db *gorm.DB, username string, password string, roleID uint) {
	// Insert with encrypted password
	hashedPassword, err := hashPassword(password)
	if err != nil {
		log.Fatalf("Failed to hash password: %v", err)
	}

	newLogin := Login{
		Username: username,
		Password: hashedPassword,
		RoleID:   roleID,
	}
	result := db.Create(&newLogin)
	if result.Error != nil {
		log.Fatalf("Failed to insert New Login: %v", result.Error)
	}
}

func updateLogin(db *gorm.DB, id uint, username string, password string, roleID uint) {
	// Update with encrypted password
	hashedPassword, err := hashPassword(password)
	if err != nil {
		log.Fatalf("Failed to hash password: %v", err)
	}

	updatedLogin := Login{
		Username: username,
		Password: hashedPassword,
		RoleID:   roleID,
	}
	result := db.Model(&Login{}).Where("id = ?", id).Updates(&updatedLogin)
	if result.Error != nil {
		log.Fatalf("Failed to Update Login: %v", result.Error)
	}
}

func deleteLogin(db *gorm.DB, id uint) {
	// Delete user
	result := db.Delete(&Login{}, id)
	if result.Error != nil {
		log.Fatalf("Failed to delete login: %v", result.Error)
	}
}

func insertUser(db *gorm.DB, Hospital_id int, Ward_id int, Login_id int, Nurse_level int, Firstname string, Lastname string, Gender string, Phone string, Email string, Employment_year string) {
	newUser := User{
		Hospital_id:     uint(Hospital_id),
		Ward_id:         uint(Ward_id),
		Login_id:        uint(Login_id),
		Nurse_level:     uint(Nurse_level),
		Firstname:       Firstname,
		Lastname:        Lastname,
		Gender:          Gender,
		Phone:           Phone,
		Email:           Email,
		Employment_year: Employment_year,
	}
	result := db.Create(&newUser)
	if result.Error != nil {
		log.Fatalf("Failed to insert New User: %v", result.Error)
	}
}

func updateUser(db *gorm.DB, id uint, Hospital_id int, Ward_id int, Login_id int, Nurse_level int, Firstname string, Lastname string, Gender string, Phone string, Email string, Employment_year string) {
	updatedUser := User{
		Hospital_id:     uint(Hospital_id),
		Ward_id:         uint(Ward_id),
		Login_id:        uint(Login_id),
		Nurse_level:     uint(Nurse_level),
		Firstname:       Firstname,
		Lastname:        Lastname,
		Gender:          Gender,
		Phone:           Phone,
		Email:           Email,
		Employment_year: Employment_year,
	}
	result := db.Model(&User{}).Where("id = ?", id).Updates(&updatedUser)
	if result.Error != nil {
		log.Fatalf("Failed to Update User: %v", result.Error)
	}
}

func deleteUser(db *gorm.DB, id uint) {
	// Delete user
	result := db.Delete(&User{}, id)
	if result.Error != nil {
		log.Fatalf("Failed to delete user: %v", result.Error)
	}
}

func main() {
	// connect database mysql
	dsn := "top:1234@tcp(127.0.0.1:8889)/NursePlan?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	// Query all logins
	var logins []Login
	var users []User
	db.Find(&users)
	db.Find(&logins)

	// insertUser(db, "Sirawittop", "top202ueo546", 1)
	// updateUser(db, 6, "Trin", "tep202546", 1)
	// insertUser(db, 1, 1, 7, 1, "สิรวิชญ์", "คำชุ่ม", "ชาย", "0996633516", "sirawit.code@gmail.com", time.Now().Format("2006-01-02"))
	// Display the retrieved logins data

	for _, login := range logins {
		fmt.Printf(" Login : %d , %s , %s , %d \n", login.ID, login.Username, login.Password, login.RoleID)
	}

	// Display the retrieved usres data
	for _, user := range users {
		fmt.Println(" User : ", user.ID, user.Hospital_id, user.Ward_id, user.Login_id, user.Firstname, user.Lastname, user.Gender, user.Phone, user.Email, user.Employment_year)
	}
}
