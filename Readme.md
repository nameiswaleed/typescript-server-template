# TypeScript Backend Template in NodeJS

This is a template for a Node.js backend application using TypeScript, Express, MongoDB and Restful APIs.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install` or `yarn install`.
3. Create a `.env` file based on the provided `.env.sample` file. This will contain configuration options for the app.
4. Start the development server by running `npm run dev` or `yarn dev`.

### Available Commands

- `npm run build`: Compiles TypeScript code and creates a production build in the `dist` folder.
- `npm run start`: Starts the app in production mode by running the compiled code from the `dist` folder.
- `npm run dev`: Starts the app in development mode with auto-reloading enabled.

You can also replace `npm` with `yarn` in the above commands if you prefer to use Yarn.

## Project Structure

The project is structured as follows:

```
src/
├── config/         # Contains configs files for .env
├── controllers/    # Contains class-based controller files
├── database/       # Contains Database
| └─ models/        # Contains database model files
├── services/       # Contains functional service files
├── routes/         # Contains route files
└─ database         # Contains functional service files


```

## Contributing

Contributions to this project are welcome. If you find a bug or think of an improvement, feel free to submit a pull request or open an issue.

## License

This project is licensed under the [MIT License](LICENSE).
