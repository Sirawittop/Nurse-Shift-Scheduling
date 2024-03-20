package main

import (
	"errors"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt"
	"github.com/joho/godotenv"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var db *gorm.DB
var secretKey = []byte("secret-key")

type Hospitals struct {
	gorm.Model
	ID      uint `gorm:"primaryKey;autoIncrement;not null"`
	Name    string
	Address string
	Phone   string
}

type Login struct {
	gorm.Model
	ID       uint `gorm:"primaryKey;autoIncrement;not null"`
	Username string
	Password string
	RoleID   uint
}

type NurseLevel struct {
	gorm.Model
	ID    uint `gorm:"primaryKey;autoIncrement;not null"`
	Level string
}

type OTs struct {
	gorm.Model
	ID           uint `gorm:"primaryKey;autoIncrement;not null"`
	Name         string
	Hospitals_id uint
	Ward_id      uint
	Morning      uint
	Afternoon    uint
	Night        uint
}

type Plans struct {
	gorm.Model
	ID           uint `gorm:"primaryKey;autoIncrement;not null"`
	Hospitals_id uint
	Ward_id      uint
	Nurse_id     uint
	OT_id        uint
	Day1         uint
	Day2         uint
	Day3         uint
	Day4         uint
	Day5         uint
	Day6         uint
	Day7         uint
	Day8         uint
	Day9         uint
	Day10        uint
	Day11        uint
	Day12        uint
	Day13        uint
	Day14        uint
	Day15        uint
	Day16        uint
	Day17        uint
	Day18        uint
	Day19        uint
	Day20        uint
	Day21        uint
	Day22        uint
	Day23        uint
	Day24        uint
	Day25        uint
	Day26        uint
	Day27        uint
	Day28        uint
	Day29        uint
	Day30        uint
	Day31        uint
}

type Plantypes struct {
	gorm.Model
	ID         uint `gorm:"primaryKey;autoIncrement;not null"`
	Type       string
	Morning    bool
	Afternoon  bool
	Night      bool
	X          bool
	V          bool
	Nleave     bool
	C          bool
	Part       bool
	Otm        bool
	Ota        bool
	Otn        bool
	StatusS    bool
	StatusOT8  bool
	StatusOT12 bool
}

type Roles struct {
	gorm.Model
	ID   uint `gorm:"primaryKey;autoIncrement;not null"`
	Name string
}

type User struct {
	gorm.Model
	ID              uint `gorm:"primaryKey;autoIncrement;not null"`
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

type Wards struct {
	gorm.Model
	ID           uint `gorm:"primaryKey;autoIncrement;not null"`
	Hospitals_id uint
	Name         string
}

// CRUD Hospital
func insertHospital(name string, address string, phone string) {
	newHospital := Hospitals{
		Name:    name,
		Address: address,
		Phone:   phone,
	}
	result := db.Create(&newHospital)
	if result.Error != nil {
		log.Fatalf("Failed to insert New Hospital: %v", result.Error)
	}
}

func updateHospital(id uint, name string, address string, phone string) {
	updatedHospital := Hospitals{
		Name:    name,
		Address: address,
		Phone:   phone,
	}
	result := db.Model(&Hospitals{}).Where("id = ?", id).Updates(&updatedHospital)
	if result.Error != nil {
		log.Fatalf("Failed to Update Hospital: %v", result.Error)
	}
}

func deleteHospital(id uint) {
	// Delete hospital
	result := db.Delete(&Hospitals{}, id)
	if result.Error != nil {
		log.Fatalf("Failed to delete hospital: %v", result.Error)
	}
}

// CRUD Login
func insertLogin(username string, password string, roleID uint) {
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

func updateLogin(id uint, username string, password string, roleID uint) {
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

func deleteLogin(id uint) {
	// Delete user
	result := db.Delete(&Login{}, id)
	if result.Error != nil {
		log.Fatalf("Failed to delete login: %v", result.Error)
	}
}

// CRUD NurseLevel
func insertNurseLevel(level string) {
	newNurseLevel := NurseLevel{
		Level: level,
	}
	result := db.Create(&newNurseLevel)
	if result.Error != nil {
		log.Fatalf("Failed to insert New NurseLevel: %v", result.Error)
	}
}

func updateNurseLevel(id uint, level string) {
	updatedNurseLevel := NurseLevel{
		Level: level,
	}
	result := db.Model(&NurseLevel{}).Where("id = ?", id).Updates(&updatedNurseLevel)
	if result.Error != nil {
		log.Fatalf("Failed to Update NurseLevel: %v", result.Error)
	}
}

func deleteNurseLevel(id uint) {
	// Delete user
	result := db.Delete(&NurseLevel{}, id)
	if result.Error != nil {
		log.Fatalf("Failed to delete nurse level: %v", result.Error)
	}
}

// CRUD OT
func insertOT(name string, Hospitals_id uint, Ward_id uint, Morning uint, Afternoon uint, Night uint) {
	newOT := OTs{
		Name:         name,
		Hospitals_id: Hospitals_id,
		Ward_id:      Ward_id,
		Morning:      Morning,
		Afternoon:    Afternoon,
		Night:        Night,
	}
	result := db.Create(&newOT)
	if result.Error != nil {
		log.Fatalf("Failed to insert New OT: %v", result.Error)
	}
}

func updateOT(id uint, name string, Hospitals_id uint, Ward_id uint, Morning uint, Afternoon uint, Night uint) {
	updatedOT := OTs{
		Name:         name,
		Hospitals_id: Hospitals_id,
		Ward_id:      Ward_id,
		Morning:      Morning,
		Afternoon:    Afternoon,
		Night:        Night,
	}
	result := db.Model(&OTs{}).Where("id = ?", id).Updates(&updatedOT)
	if result.Error != nil {
		log.Fatalf("Failed to Update OT: %v", result.Error)
	}
}

func deleteOT(id uint) {
	// Delete user
	result := db.Delete(&OTs{}, id)
	if result.Error != nil {
		log.Fatalf("Failed to delete OT: %v", result.Error)
	}
}

// CRUD Plan
func insertPlan(Hospitals_id uint, Ward_id uint, Nurse_id uint, OT_id uint, Day1 uint, Day2 uint, Day3 uint, Day4 uint, Day5 uint, Day6 uint, Day7 uint, Day8 uint, Day9 uint, Day10 uint, Day11 uint, Day12 uint, Day13 uint, Day14 uint, Day15 uint, Day16 uint, Day17 uint, Day18 uint, Day19 uint, Day20 uint, Day21 uint, Day22 uint, Day23 uint, Day24 uint, Day25 uint, Day26 uint, Day27 uint, Day28 uint, Day29 uint, Day30 uint, Day31 uint) {
	newPlan := Plans{
		Hospitals_id: Hospitals_id,
		Ward_id:      Ward_id,
		Nurse_id:     Nurse_id,
		OT_id:        OT_id,
		Day1:         Day1,
		Day2:         Day2,
		Day3:         Day3,
		Day4:         Day4,
		Day5:         Day5,
		Day6:         Day6,
		Day7:         Day7,
		Day8:         Day8,
		Day9:         Day9,
		Day10:        Day10,
		Day11:        Day11,
		Day12:        Day12,
		Day13:        Day13,
		Day14:        Day14,
		Day15:        Day15,
		Day16:        Day16,
		Day17:        Day17,
		Day18:        Day18,
		Day19:        Day19,
		Day20:        Day20,
		Day21:        Day21,
		Day22:        Day22,
		Day23:        Day23,
		Day24:        Day24,
		Day25:        Day25,
		Day26:        Day26,
		Day27:        Day27,
		Day28:        Day28,
		Day29:        Day29,
		Day30:        Day30,
		Day31:        Day31,
	}
	result := db.Create(&newPlan)
	if result.Error != nil {
		log.Fatalf("Failed to insert New Plan: %v", result.Error)
	}
}

func updatePlan(id uint, Hospitals_id uint, Ward_id uint, Nurse_id uint, OT_id uint, Day1 uint, Day2 uint, Day3 uint, Day4 uint, Day5 uint, Day6 uint, Day7 uint, Day8 uint, Day9 uint, Day10 uint, Day11 uint, Day12 uint, Day13 uint, Day14 uint, Day15 uint, Day16 uint, Day17 uint, Day18 uint, Day19 uint, Day20 uint, Day21 uint, Day22 uint, Day23 uint, Day24 uint, Day25 uint, Day26 uint, Day27 uint, Day28 uint, Day29 uint, Day30 uint, Day31 uint) {
	updatedPlan := Plans{
		Hospitals_id: Hospitals_id,
		Ward_id:      Ward_id,
		Nurse_id:     Nurse_id,
		OT_id:        OT_id,
		Day1:         Day1,
		Day2:         Day2,
		Day3:         Day3,
		Day4:         Day4,
		Day5:         Day5,
		Day6:         Day6,
		Day7:         Day7,
		Day8:         Day8,
		Day9:         Day9,
		Day10:        Day10,
		Day11:        Day11,
		Day12:        Day12,
		Day13:        Day13,
		Day14:        Day14,
		Day15:        Day15,
		Day16:        Day16,
		Day17:        Day17,
		Day18:        Day18,
		Day19:        Day19,
		Day20:        Day20,
		Day21:        Day21,
		Day22:        Day22,
		Day23:        Day23,
		Day24:        Day24,
		Day25:        Day25,
		Day26:        Day26,
		Day27:        Day27,
		Day28:        Day28,
		Day29:        Day29,
		Day30:        Day30,
		Day31:        Day31,
	}
	result := db.Model(&Plans{}).Where("id = ?", id).Updates(&updatedPlan)
	if result.Error != nil {
		log.Fatalf("Failed to Update Plan: %v", result.Error)
	}
}

func deletePlan(id uint) {
	// Delete user
	result := db.Delete(&Plans{}, id)
	if result.Error != nil {
		log.Fatalf("Failed to delete plan: %v", result.Error)
	}
}

// CRUD Plantypes
func insertPlantypes(Type string, Morning bool, Afternoon bool, Night bool, X bool, V bool, Nleave bool, C bool, Part bool, Otm bool, Ota bool, Otn bool, StatusS bool, StatusOT8 bool, StatusOT12 bool) {
	newPlantypes := Plantypes{
		Type:       Type,
		Morning:    Morning,
		Afternoon:  Afternoon,
		Night:      Night,
		X:          X,
		V:          V,
		Nleave:     Nleave,
		C:          C,
		Part:       Part,
		Otm:        Otm,
		Ota:        Ota,
		Otn:        Otn,
		StatusS:    StatusS,
		StatusOT8:  StatusOT8,
		StatusOT12: StatusOT12,
	}
	result := db.Create(&newPlantypes)
	if result.Error != nil {
		log.Fatalf("Failed to insert New Plantypes: %v", result.Error)
	}
}

func updatePlantypes(id uint, Type string, Morning bool, Afternoon bool, Night bool, X bool, V bool, Nleave bool, C bool, Part bool, Otm bool, Ota bool, Otn bool, StatusS bool, StatusOT8 bool, StatusOT12 bool) {
	updatedPlantypes := Plantypes{
		Type:       Type,
		Morning:    Morning,
		Afternoon:  Afternoon,
		Night:      Night,
		X:          X,
		V:          V,
		Nleave:     Nleave,
		C:          C,
		Part:       Part,
		Otm:        Otm,
		Ota:        Ota,
		Otn:        Otn,
		StatusS:    StatusS,
		StatusOT8:  StatusOT8,
		StatusOT12: StatusOT12,
	}
	result := db.Model(&Plantypes{}).Where("id = ?", id).Updates(&updatedPlantypes)
	if result.Error != nil {
		log.Fatalf("Failed to Update Plantypes: %v", result.Error)
	}
}

func deletePlantypes(id uint) {
	// Delete user
	result := db.Delete(&Plantypes{}, id)
	if result.Error != nil {
		log.Fatalf("Failed to delete plantypes: %v", result.Error)
	}
}

// CRUD Roles
func insertRole(name string) {
	newRole := Roles{
		Name: name,
	}
	result := db.Create(&newRole)
	if result.Error != nil {
		log.Fatalf("Failed to insert New Role: %v", result.Error)
	}
}

func updateRole(id uint, name string) {
	updatedRole := Roles{
		Name: name,
	}
	result := db.Model(&Roles{}).Where("id = ?", id).Updates(&updatedRole)
	if result.Error != nil {
		log.Fatalf("Failed to Update Role: %v", result.Error)
	}
}

func deleteRole(id uint) {
	// Delete user
	result := db.Delete(&Roles{}, id)
	if result.Error != nil {
		log.Fatalf("Failed to delete role: %v", result.Error)
	}
}

// CRUD User
func insertUser(Hospital_id int, Ward_id int, Login_id int, Nurse_level int, Firstname string, Lastname string, Gender string, Phone string, Email string, Employment_year string) {
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

func updateUser(id uint, Hospital_id int, Ward_id int, Login_id int, Nurse_level int, Firstname string, Lastname string, Gender string, Phone string, Email string, Employment_year string) {
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

func deleteUser(id uint) {
	// Delete user
	result := db.Delete(&User{}, id)
	if result.Error != nil {
		log.Fatalf("Failed to delete user: %v", result.Error)
	}
}

// CRUD Ward
func insertWard(Hospitals_id int, Name string) {
	newWard := Wards{
		Hospitals_id: uint(Hospitals_id),
		Name:         Name,
	}
	result := db.Create(&newWard)
	if result.Error != nil {
		log.Fatalf("Failed to insert New Ward: %v", result.Error)
	}
}

func updateWard(id uint, Hospitals_id int, Name string) {
	updatedWard := Wards{
		Hospitals_id: uint(Hospitals_id),
		Name:         Name,
	}
	result := db.Model(&Wards{}).Where("id = ?", id).Updates(&updatedWard)
	if result.Error != nil {
		log.Fatalf("Failed to Update Ward: %v", result.Error)
	}
}

func deleteWard(id uint) {
	// Delete ward
	result := db.Delete(&Wards{}, id)
	if result.Error != nil {
		log.Fatalf("Failed to delete ward: %v", result.Error)
	}
}

// Function to hash password
func hashPassword(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), 1)
	if err != nil {
		return "", err
	}
	return string(hashedPassword), nil
}

func main() {
	// Load .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	// Get environment variables
	dbUsername := os.Getenv("DB_USERNAME")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")

	// Connect to database
	dsn := dbUsername + ":" + dbPassword + "@tcp(" + dbHost + ":" + dbPort + ")/" + dbName + "?charset=utf8mb4&parseTime=True&loc=Local"
	db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	insertHospital("โรงพยาบาลมหาวิทยาลัยพะเยา", "19/1 หมู่ 2 ถ.พหลโยธิน ต.แม่กา อ.เมืองพะเยา จ.พะเยา 56000", "+66-5446-6758")

	// app := fiber.New()

	// app.Post("/login", loginHandler)
	// app.Get("/protected", protectedHandler)

	// fmt.Println("Starting the server on localhost:5555")
	// err = app.Listen(":5555")
	// if err != nil {
	// 	fmt.Println("Could not start the server", err)
	// }
}

func loginHandler(c *fiber.Ctx) error {
	var u Login
	if err := c.BodyParser(&u); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	// Query the database to check if the username exists
	var user Login
	if err := db.Where("username = ?", u.Username).First(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return c.Status(fiber.StatusUnauthorized).SendString("Invalid Username")
		}
		return c.Status(fiber.StatusInternalServerError).SendString("Database error")
	}

	// Compare the hashed password from the database with the provided password
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(u.Password)); err != nil {
		return c.Status(fiber.StatusUnauthorized).SendString("Invalid Password")
	}

	// If the username and password are correct, generate a token
	tokenString, err := createToken(u.Username)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).SendString("Internal Server Error")
	}
	return c.SendString(tokenString)
}

func protectedHandler(c *fiber.Ctx) error {
	tokenString := c.Get("Authorization")
	if tokenString == "" {
		return c.Status(fiber.StatusUnauthorized).SendString("Missing authorization header")
	}
	tokenString = tokenString[len("Bearer "):]

	err := verifyToken(tokenString)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).SendString("Invalid token")
	}

	return c.SendString("Welcome to the protected area")
}

func createToken(username string) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256,
		jwt.MapClaims{
			"username": username,
			"exp":      time.Now().Add(time.Hour * 24).Unix(),
		})

	tokenString, err := token.SignedString(secretKey)
	if err != nil {
		return "", err
	}

	return tokenString, nil
}

func verifyToken(tokenString string) error {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return secretKey, nil
	})

	if err != nil {
		return err
	}

	if !token.Valid {
		return fmt.Errorf("invalid token")
	}

	return nil
}
