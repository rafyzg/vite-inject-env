FROM node:16.10-slim
COPY . /app
WORKDIR /app

RUN npm install

RUN \
VITE_COLOR= \
VITE_LOGO_URL= \
VITE_MAIN_TEXT= \
VITE_LINK_URL= \
npx vite-inject-env build npm run build

EXPOSE 8080

ENTRYPOINT \
VITE_COLOR=$VITE_COLOR \
VITE_LOGO_URL=$VITE_LOGO_URL \
VITE_MAIN_TEXT=$VITE_MAIN_TEXT \
VITE_LINK_URL=$VITE_LINK_URL \
npx vite-inject-env inject -d ./build \
&& npx http-server build
