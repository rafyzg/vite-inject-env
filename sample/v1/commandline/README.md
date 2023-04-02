# Demo

You may run the following commands to test out this project:

## 1. Build
```
VITE_COLOR= VITE_LOGO_URL= VITE_MAIN_TEXT= VITE_LINK_URL= npx vite-inject-env build npm run build

## Formatted
VITE_COLOR= \
VITE_LOGO_URL= \
VITE_MAIN_TEXT= \
VITE_LINK_URL= \
npx vite-inject-env build \
npm run build
```

## 2. Inject

```
VITE_COLOR=black VITE_LOGO_URL=https://i.imgur.com/RAylUAO.png VITE_MAIN_TEXT=vite-inject-env VITE_LINK_URL=https://www.npmjs.com/package/vite-inject-env npx vite-inject-env inject -d ./build -o ./build-black

# Formatted
VITE_COLOR=black \
VITE_LOGO_URL=https://i.imgur.com/RAylUAO.png \
VITE_MAIN_TEXT=vite-inject-env \
VITE_LINK_URL=https://www.npmjs.com/package/vite-inject-env \
npx vite-inject-env inject -d ./build -o ./build-black
```

## 3. Serve

```
npx http-server build-black 
```

## 4. Change variables and re-serve

Try changing some variables and re-run step #2 and step #3.

```
VITE_COLOR=purple \
VITE_LOGO_URL=./logo512.png \
VITE_MAIN_TEXT="Insert Text here" \
VITE_LINK_URL=https://my.link \
npx vite-inject-env inject -d ./build -o ./build-purple

npx http-server build-purple
```

# Docker

