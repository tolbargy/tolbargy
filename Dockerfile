FROM staticfloat/nginx-certbot
COPY ./ /usr/share/nginx/html
COPY ./conf.d /etc/nginx/conf.d
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
