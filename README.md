# Kamana

A modular, scalable, and well-structured backend API built with **NestJS** and **MikroORM**. This system provides a foundation for collaborative project and task management, including user authentication, role-based authorization, project membership, task tracking, and threaded comments.

## ✨ Features

- 🔐 JWT Authentication
- 👤 User registration & profile management
- 📁 Project creation & membership management
- ✅ Task assignment, filtering, and status tracking
- 💬 Commenting system per task
- 🛡 Role-based authorization (USER, PROJECT_OWNER, ADMIN)
- 🧪 Validation with class-validator & DTOs
- 🧱 Scalable architecture using NestJS modules

## 🧠 Tech Stack

- **NestJS** (framework)
- **MikroORM** (ORM)
- **PostgreSQL** (database)
- **Passport + JWT** (authentication)
- **class-validator & class-transformer** (validation)

## 🗂 Project Structure

```bash
src/
├── auth/           # Login, registration, JWT strategy
├── users/          # User entity, profile updates, roles
├── projects/       # Project creation, membership, access control
├── tasks/          # Task creation, assignment, updates
├── comments/       # Task comments
├── common/         # Shared guards, pipes, interceptors
├── database/       # MikroORM config and entities
├── main.ts         # App bootstrap
```

## 🚀 Getting Started

### Prerequisites

- Node.js 22+
- PostgreSQL
- pnpm

### Installation

```bash
git clone https://github.com/andrefelizardo/kamana.git
cd project-task-api
pnpm install
```

### Environment Configuration

Create a `.env` file based on `.env.example`:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/project_db
JWT_SECRET=your_jwt_secret
PORT=3000
```

### Running the Project

```bash
pnpm start:dev
```

### Running Migrations

```bash
pnpm mikro-orm migration:create
pnpm mikro-orm migration:up
```

## 🧪 Testing

```bash
pnpm test
```

## 🧾 API Documentation

[Entity Relationship Diagram (ERD)](https://github.com/andrefelizardo/kamana/docs/erd-06-03-2025.png)

Swagger will be available at:

```
http://localhost:3000/api
```

## 👐 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

- Fork the project
- Create your branch: `git checkout -b feature/your-feature`
- Commit your changes: `git commit -m 'feat: add new feature'`
- Push to the branch: `git push origin feature/your-feature`
- Open a Pull Request

## 📄 License

[MIT](LICENSE)

---

Made with ❤️ using [NestJS](https://nestjs.com) and [MikroORM](https://mikro-orm.io)
