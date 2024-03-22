package main

import (
	"log"
	"nurse/model"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

// CRUD Hospital
func getHospitals(c *fiber.Ctx) error {
	var hospitals []model.Hospitals
	result := db.Find(&hospitals)
	if result.Error != nil {
		log.Fatalf("Failed to get hospitals: %v", result.Error)
	}
	return c.JSON(hospitals)
}

func insertHospital(c *fiber.Ctx) error {
	var hospital model.Hospitals
	if err := c.BodyParser(&hospital); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	// Insert hospital
	result := db.Create(&hospital)
	if result.Error != nil {
		log.Fatalf("Failed to insert New Hospital: %v", result.Error)
	}
	return c.JSON(hospital)
}

func updateHospital(c *fiber.Ctx) error {
	var hospital model.Hospitals
	if err := c.BodyParser(&hospital); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	// Update hospital
	result := db.Model(&model.Hospitals{}).Where("id = ?", hospital.ID).Updates(&hospital)
	if result.Error != nil {
		log.Fatalf("Failed to Update Hospital: %v", result.Error)
	}
	return c.JSON(hospital)
}

func deleteHospital(c *fiber.Ctx) error {
	id := c.Params("id")
	var hospital model.Hospitals
	result := db.Where("id = ?", id).Delete(&hospital)
	if result.Error != nil {
		log.Fatalf("Failed to delete hospital: %v", result.Error)
	}
	return c.SendString("Hospital successfully deleted")
}

// CRUD Login
func getLogins(c *fiber.Ctx) error {
	var logins []model.Login
	result := db.Find(&logins)
	if result.Error != nil {
		log.Fatalf("Failed to get logins: %v", result.Error)
	}
	return c.JSON(logins)
}

func insertLogin(c *fiber.Ctx) error {
	var login model.Login
	if err := c.BodyParser(&login); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	// Insert with encrypted password
	hashedPassword, err := hashPassword(login.Password)
	if err != nil {
		log.Fatalf("Failed to hash password: %v", err)
	}
	login.Password = hashedPassword

	result := db.Create(&login)
	if result.Error != nil {
		log.Fatalf("Failed to insert New Login: %v", result.Error)
	}
	return c.JSON(login)
}

func updateLogin(c *fiber.Ctx) error {
	var login model.Login
	if err := c.BodyParser(&login); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	// Update with encrypted password
	hashedPassword, err := hashPassword(login.Password)
	if err != nil {
		log.Fatalf("Failed to hash password: %v", err)
	}
	login.Password = hashedPassword

	result := db.Model(&model.Login{}).Where("id = ?", login.ID).Updates(&login)
	if result.Error != nil {
		log.Fatalf("Failed to Update Login: %v", result.Error)
	}
	return c.JSON(login)
}

func deleteLogin(c *fiber.Ctx) error {
	id := c.Params("id")
	var login model.Login
	result := db.Where("id = ?", id).Delete(&login)
	if result.Error != nil {
		log.Fatalf("Failed to delete login: %v", result.Error)
	}
	return c.SendString("Login successfully deleted")
}

// CRUD NurseLevel
func getNurseLevels(c *fiber.Ctx) error {
	var nurseLevels []model.NurseLevel
	result := db.Find(&nurseLevels)
	if result.Error != nil {
		log.Fatalf("Failed to get nurse levels: %v", result.Error)
	}
	return c.JSON(nurseLevels)
}

func insertNurseLevel(c *fiber.Ctx) error {
	var nurseLevel model.NurseLevel
	if err := c.BodyParser(&nurseLevel); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	result := db.Create(&nurseLevel)
	if result.Error != nil {
		log.Fatalf("Failed to insert New NurseLevel: %v", result.Error)
	}
	return c.JSON(nurseLevel)
}

func updateNurseLevel(c *fiber.Ctx) error {
	var nurseLevel model.NurseLevel
	if err := c.BodyParser(&nurseLevel); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	result := db.Model(&model.NurseLevel{}).Where("id = ?", nurseLevel.ID).Updates(&nurseLevel)
	if result.Error != nil {
		log.Fatalf("Failed to Update NurseLevel: %v", result.Error)
	}
	return c.JSON(nurseLevel)
}

func deleteNurseLevel(c *fiber.Ctx) error {
	id := c.Params("id")
	var nurseLevel model.NurseLevel
	result := db.Where("id = ?", id).Delete(&nurseLevel)
	if result.Error != nil {
		log.Fatalf("Failed to delete nurse level: %v", result.Error)
	}
	return c.SendString("Nurse level successfully deleted")
}

// CRUD OT
func getOTs(c *fiber.Ctx) error {
	var ots []model.OTs
	result := db.Find(&ots)
	if result.Error != nil {
		log.Fatalf("Failed to get OTs: %v", result.Error)
	}
	return c.JSON(ots)
}

func insertOT(c *fiber.Ctx) error {
	var ot model.OTs
	if err := c.BodyParser(&ot); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	result := db.Create(&ot)
	if result.Error != nil {
		log.Fatalf("Failed to insert New OT: %v", result.Error)
	}
	return c.JSON(ot)
}

func updateOT(c *fiber.Ctx) error {
	var ot model.OTs
	if err := c.BodyParser(&ot); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	result := db.Model(&model.OTs{}).Where("id = ?", ot.ID).Updates(&ot)
	if result.Error != nil {
		log.Fatalf("Failed to Update OT: %v", result.Error)
	}
	return c.JSON(ot)
}

func deleteOT(c *fiber.Ctx) error {
	id := c.Params("id")
	var ot model.OTs
	result := db.Where("id = ?", id).Delete(&ot)
	if result.Error != nil {
		log.Fatalf("Failed to delete OT: %v", result.Error)
	}
	return c.SendString("OT successfully deleted")
}

// CRUD Plan
func getPlans(c *fiber.Ctx) error {
	var plans []model.Plans
	result := db.Find(&plans)
	if result.Error != nil {
		log.Fatalf("Failed to get plans: %v", result.Error)
	}
	return c.JSON(plans)
}

func insertPlan(c *fiber.Ctx) error {
	var plan model.Plans
	if err := c.BodyParser(&plan); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	result := db.Create(&plan)
	if result.Error != nil {
		log.Fatalf("Failed to insert New Plan: %v", result.Error)
	}
	return c.JSON(plan)
}

func updatePlan(c *fiber.Ctx) error {
	var plan model.Plans
	if err := c.BodyParser(&plan); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	result := db.Model(&model.Plans{}).Where("id = ?", plan.ID).Updates(&plan)
	if result.Error != nil {
		log.Fatalf("Failed to Update Plan: %v", result.Error)
	}
	return c.JSON(plan)
}

func deletePlan(c *fiber.Ctx) error {
	id := c.Params("id")
	var plan model.Plans
	result := db.Where("id = ?", id).Delete(&plan)
	if result.Error != nil {
		log.Fatalf("Failed to delete plan: %v", result.Error)
	}
	return c.SendString("Plan successfully deleted")
}

// CRUD Plantypes
func getPlantypes(c *fiber.Ctx) error {
	var plantypes []model.Plantypes
	result := db.Find(&plantypes)
	if result.Error != nil {
		log.Fatalf("Failed to get plantypes: %v", result.Error)
	}
	return c.JSON(plantypes)
}

func insertPlantypes(c *fiber.Ctx) error {
	var plantype model.Plantypes
	if err := c.BodyParser(&plantype); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	result := db.Create(&plantype)
	if result.Error != nil {
		log.Fatalf("Failed to insert New Plantypes: %v", result.Error)
	}
	return c.JSON(plantype)
}

func updatePlantypes(c *fiber.Ctx) error {
	var plantype model.Plantypes
	if err := c.BodyParser(&plantype); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	result := db.Model(&model.Plantypes{}).Where("id = ?", plantype.ID).Updates(&plantype)
	if result.Error != nil {
		log.Fatalf("Failed to Update Plantypes: %v", result.Error)
	}
	return c.JSON(plantype)
}

func deletePlantypes(c *fiber.Ctx) error {
	id := c.Params("id")
	var plantype model.Plantypes
	result := db.Where("id = ?", id).Delete(&plantype)
	if result.Error != nil {
		log.Fatalf("Failed to delete plantypes: %v", result.Error)
	}
	return c.SendString("Plantypes successfully deleted")
}

// CRUD Roles
func getRoles(c *fiber.Ctx) error {
	var roles []model.Roles
	result := db.Find(&roles)
	if result.Error != nil {
		log.Fatalf("Failed to get roles: %v", result.Error)
	}
	return c.JSON(roles)
}

func insertRole(c *fiber.Ctx) error {
	var role model.Roles
	if err := c.BodyParser(&role); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	result := db.Create(&role)
	if result.Error != nil {
		log.Fatalf("Failed to insert New Role: %v", result.Error)
	}
	return c.JSON(role)
}

func updateRole(c *fiber.Ctx) error {
	var role model.Roles
	if err := c.BodyParser(&role); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	result := db.Model(&model.Roles{}).Where("id = ?", role.ID).Updates(&role)
	if result.Error != nil {
		log.Fatalf("Failed to Update Role: %v", result.Error)
	}
	return c.JSON(role)
}

func deleteRole(c *fiber.Ctx) error {
	id := c.Params("id")
	var role model.Roles
	result := db.Where("id = ?", id).Delete(&role)
	if result.Error != nil {
		log.Fatalf("Failed to delete role: %v", result.Error)
	}
	return c.SendString("Role successfully deleted")
}

// CRUD User
func getUsers(c *fiber.Ctx) error {
	var users []model.User
	result := db.Find(&users)
	if result.Error != nil {
		log.Fatalf("Failed to get users: %v", result.Error)
	}
	return c.JSON(users)
}

func insertUser(c *fiber.Ctx) error {
	var user model.User
	if err := c.BodyParser(&user); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	result := db.Create(&user)
	if result.Error != nil {
		log.Fatalf("Failed to insert New User: %v", result.Error)
	}
	return c.JSON(user)
}

func updateUser(c *fiber.Ctx) error {
	var user model.User
	if err := c.BodyParser(&user); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	result := db.Model(&model.User{}).Where("id = ?", user.ID).Updates(&user)
	if result.Error != nil {
		log.Fatalf("Failed to Update User: %v", result.Error)
	}
	return c.JSON(user)
}

func deleteUser(c *fiber.Ctx) error {
	id := c.Params("id")
	var user model.User
	result := db.Where("id = ?", id).Delete(&user)
	if result.Error != nil {
		log.Fatalf("Failed to delete user: %v", result.Error)
	}
	return c.SendString("User successfully deleted")
}

// CRUD Ward
func getWards(c *fiber.Ctx) error {
	var wards []model.Wards
	result := db.Find(&wards)
	if result.Error != nil {
		log.Fatalf("Failed to get wards: %v", result.Error)
	}
	return c.JSON(wards)
}

func insertWard(c *fiber.Ctx) error {
	var ward model.Wards
	if err := c.BodyParser(&ward); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	result := db.Create(&ward)
	if result.Error != nil {
		log.Fatalf("Failed to insert New Ward: %v", result.Error)
	}
	return c.JSON(ward)
}

func updateWard(c *fiber.Ctx) error {
	var ward model.Wards
	if err := c.BodyParser(&ward); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Invalid request payload"})
	}

	result := db.Model(&model.Wards{}).Where("id = ?", ward.ID).Updates(&ward)
	if result.Error != nil {
		log.Fatalf("Failed to Update Ward: %v", result.Error)
	}
	return c.JSON(ward)
}

func deleteWard(c *fiber.Ctx) error {
	id := c.Params("id")
	var ward model.Wards
	result := db.Where("id = ?", id).Delete(&ward)
	if result.Error != nil {
		log.Fatalf("Failed to delete ward: %v", result.Error)
	}
	return c.SendString("Ward successfully deleted")
}

// Function to hash password
func hashPassword(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), 1)
	if err != nil {
		return "", err
	}
	return string(hashedPassword), nil
}
