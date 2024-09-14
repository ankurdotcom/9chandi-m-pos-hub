# Use Node.js base image
FROM node:14-alpine

# Create app directory in container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install all dependencies (both development and production)
RUN npm install  # This installs all dependencies, not just production ones

# Copy the rest of the application source code to the container
COPY . .

# Expose port 3000 for the app
EXPOSE 3000

# Start the Node.js app
CMD ["node", "server.js"]
