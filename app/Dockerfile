# Base image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy application code
COPY . .

# Expose port and start the application
EXPOSE 5000
CMD ["node", "index.js"]
