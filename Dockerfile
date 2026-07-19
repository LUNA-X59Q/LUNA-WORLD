FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html manifest.webmanifest sw.js favicon.svg icon-192.png icon-512.png icon-512-maskable.png apple-touch-icon.png /usr/share/nginx/html/
