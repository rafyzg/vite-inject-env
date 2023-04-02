# Demo

You may run the following commands to test out this project:

## 1. Build
```
npx vite-inject-env build npm run build
```

## 2. Inject

```
npx vite-inject-env inject -d ./build -o ./build-black
```

## 3. Serve

```
npx http-server build-black 
```

## 4. Change variables and re-serve

Try editing the `.env` file in the root folder and re-run steps #2 and steps #3


_.env_
```
VITE_COLOR = purple
VITE_LOGO_URL =./logo512.png
VITE_MAIN_TEXT = Insert Text here
VITE_LINK_URL = https://my.link
```

```sh
npx vite-inject-env inject -d ./build -o ./build-purple

npx http-server build-purple
```

## 5. Overwriting variables from command line

If an env variable is passed through the command line, it will overwrite variables in the `.env` file.

```
VITE_COLOR=blue npx vite-inject-env inject -d ./build -o ./build-blue

// the app will now have a blue background
npx http-server build-blue
```
