# NestJS Employee Management API

A RESTful API built with NestJS and MongoDB for managing employee data.

## Features

- ✅ Employee CRUD operations
- ✅ Email validation
- ✅ Role-based employee management (INTERN, ENGINEER, ADMIN)
- ✅ MongoDB integration with Mongoose
- ✅ Input validation with class-validator
- ✅ Error handling for invalid IDs
- ✅ RESTful API endpoints

## Tech Stack

- **Framework**: NestJS
- **Database**: MongoDB
- **ORM**: Mongoose
- **Validation**: class-validator
- **Language**: TypeScript

## API Endpoints

### Employees

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/employees` | Get all employees |
| GET | `/employees/:id` | Get employee by ID |
| POST | `/employees` | Create new employee |
| PATCH | `/employees/:id` | Update employee |
| DELETE | `/employees/:id` | Delete employee |

### Employee Schema

```json
{
  "name": "string",
  "email": "string (valid email format)",
  "role": "INTERN | ENGINEER | ADMIN"
}
```