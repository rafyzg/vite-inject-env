rm -r tests/output
mkdir -p tests/output

echo VITE_PROCESS_ENV: "$VITE_PROCESS_ENV" >> tests/output/test.txt
echo VITE_DOT_ENV: "$VITE_DOT_ENV" >> tests/output/test.txt
echo VITE_NO_INPUT: "$VITE_NO_INPUT" >> tests/output/test.txt
echo GENERIC_ENV: "$GENERIC_ENV" >> tests/output/test.txt
echo VITE_BYPASS_ENV: "$VITE_BYPASS_ENV" >> tests/output/test.txt
echo PUBLIC_URL: "$PUBLIC_URL" >> tests/output/test.txt

echo VITE_INJECT_ENV1: "$VITE_INJECT_ENV1" >> tests/output/test2.txt
echo VITE_INJECT_ENV2: "$VITE_INJECT_ENV2" >> tests/output/test2.txt
echo PUBLIC_URL: "$PUBLIC_URL" >> tests/output/test2.txt

mkdir -p tests/output/test3
echo VITE_INJECT_ENV3: "$VITE_INJECT_ENV3" >> tests/output/test3/test3.txt
echo VITE_INJECT_ENV3: "$VITE_INJECT_ENV3" >> tests/output/test3/test3b.txt

echo VITE_INJECT_ENV4: "$VITE_INJECT_ENV4" >> tests/output/test4.txt



