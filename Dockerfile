FROM node:current-alpine3.10

# Create renewal-tool directory
WORKDIR /usr/src/renewal-tool

# Move source files to docker image
COPY . .

# Install dependencies
RUN yarn && yarn build

# Run
ENTRYPOINT yarn start $ARGS