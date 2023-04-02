# Demo

You may run the following commands to test out this project:

## 1. Build Docker image

```
docker build . -t vite-inject-env-sample
```

## 2. Run Docker container

```
docker run -p 8080:8080 -e VITE_COLOR=black -e VITE_LOGO_URL=https://i.imgur.com/RAylUAO.png -e VITE_MAIN_TEXT="vite-inject-env (docker)" -e VITE_LINK_URL=https://www.npmjs.com/package/vite-inject-env vite-inject-env-sample

# Formatted
docker run -p 8080:8080 \
-e VITE_COLOR=black \
-e VITE_LOGO_URL=https://i.imgur.com/RAylUAO.png \
-e VITE_MAIN_TEXT="vite-inject-env (docker)" \
-e VITE_LINK_URL=https://www.npmjs.com/package/vite-inject-env vite-inject-env-sample
```

## 3. Try changing environment variables and re-running

```
docker run -p 8080:8080 -e VITE_COLOR=purple -e VITE_LOGO_URL=./logo512.png -e VITE_MAIN_TEXT="My own text" -e VITE_LINK_URL=https://my.link vite-inject-env-sample

# Formatted
docker run -p 8080:8080 \
-e VITE_COLOR=purple \
-e VITE_LOGO_URL=./logo512.png \
-e VITE_MAIN_TEXT="My own text" \
-e VITE_LINK_URL=https://my.link vite-inject-env-sample
```
