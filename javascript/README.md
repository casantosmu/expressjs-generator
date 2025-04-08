# Express.js

This template provides a minimal setup to get started with Express.js, with linting and development tools pre-configured.

## Features

- Express.js 5.x
- Modern ESM modules
- ESLint and Prettier configuration
- Development mode with auto-restart and debugging
- Environment variables support

## Getting Started

```bash
# Install dependencies
npm install

# Start development server with auto-restart
npm run dev

# Start production server
npm start

# Run linting
npm run lint
```

## Environment Variables

The project uses environment variables for configuration. Create a `.env` file in the root directory:

```
PORT=3000
# Add other environment variables here
```

**Note:** If you run `npm run dev` without a `.env` file, you'll see this error:

```
node: .env: not found
```

Create the `.env` file even if it's empty to avoid this error.

## Project Structure

```
├── .editorconfig       # Editor configuration for code formatting
├── .env                # Environment variables
├── .gitignore          # Git ignore configuration
├── eslint.config.js    # ESLint configuration
├── package.json        # Project dependencies and scripts
├── src/
│   ├── index.js        # Application entry point
│   └── router.js       # Express router definition
```

## Development Tools

### ESLint

This project uses ESLint. The configuration is in `eslint.config.js`.

For more information on customizing ESLint, see the [ESLint documentation](https://eslint.org/docs/latest/).

### Prettier

Prettier is configured for code formatting. The `.editorconfig` file defines basic formatting rules like indentation size, line endings, and charset.

For more information, see:

- [EditorConfig documentation](https://editorconfig.org/)
- [Prettier documentation](https://prettier.io/docs/)

### Debugging

The `dev` script includes the `--inspect` flag, which enables debugging.

- Use **Chrome DevTools**: Open `chrome://inspect` in Chrome browser
- Or configure your preferred editor to attach to the Node.js debugging port (9229)

For more information on debugging Node.js applications, see the [official Node.js debugging guide](https://nodejs.org/en/learn/getting-started/debugging).

## Editor Configuration

Most modern code editors provide support for ESLint and Prettier. Configure your editor of choice by referring to their official documentation:

- [ESLint Editor Integration](https://eslint.org/docs/latest/use/integrations#editors)
- [Prettier Editor Integration](https://prettier.io/docs/en/editors.html)

For more information about Express.js, see the [official documentation](https://expressjs.com/).
