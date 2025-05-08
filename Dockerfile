FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:18
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/dist ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
