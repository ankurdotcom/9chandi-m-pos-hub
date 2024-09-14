# Use Node.js base image
FROM node:14-alpine

# Create app directory in container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy app source code
COPY . .

# Expose port for the app
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
