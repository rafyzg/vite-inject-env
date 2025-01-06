# Demo

You may run the following commands to test out this project:

## 1. Build
```
npm run build
```

## 2. Set Environment Variables

```
VITE_COLOR=navy VITE_LOGO_URL=https://i.imgur.com/RAylUAO.png VITE_MAIN_TEXT=vite-inject-env VITE_LINK_URL=https://www.npmjs.com/package/vite-inject-env npx vite-inject-env set

# Formatted
VITE_COLOR=navy \
VITE_LOGO_URL=https://i.imgur.com/RAylUAO.png \
VITE_MAIN_TEXT=vite-inject-env \
VITE_LINK_URL=https://www.npmjs.com/package/vite-inject-env \
npx vite-inject-env set

# Windows
set VITE_COLOR=navy&& set VITE_LOGO_URL=https://i.imgur.com/RAylUAO.png&& set VITE_MAIN_TEXT=vite-inject-env&& set VITE_LINK_URL=https://www.npmjs.com/package/vite-inject-env&& npx vite-inject-env set
```

## 3. Serve

```
npx http-server dist
```

## 4. Change variables and re-serve

Try changing some variables and re-run step #2 and step #3.

```
VITE_COLOR=purple \
VITE_LOGO_URL=https://i.imgur.com/RAylUAO.png \
VITE_MAIN_TEXT="Insert Text here" \
VITE_LINK_URL=https://my.link \
npx vite-inject-env set && npx http-server dist
```

## 5. Usage with dotenv

You may also use variables from dotenv. Create a `.env` file at `sample/v2/.env` and paste the following variables:

```
VITE_COLOR = black
VITE_LOGO_URL = https://c.tenor.com/tIgmDpBGuKQAAAAd/kim-petras-i-love-you.gif
VITE_MAIN_TEXT = Text from .env
VITE_LINK_URL = https://my.link
```

Then run the following command:

```
npx vite-inject-env set && npx http-server dist
```

Note: Environment variables passed from the command line will always overwrite `.env` variables

# Docker

Build the Docker image

```
docker build . -t vite-inject-env-sample-v2
```

Run with environment variables

```
docker run -p 8080:8080 \                   
-e VITE_COLOR=yellow \
-e VITE_LOGO_URL=./logo512.png \
-e VITE_MAIN_TEXT="docker text" \
-e VITE_LINK_URL=https://docker.link \
vite-inject-env-sample-v2
```

You may also SSH directly into the Docker container to modify the `.env` file.
