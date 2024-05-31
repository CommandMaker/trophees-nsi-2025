FROM php:8.3.7-fpm

RUN apt-get update && apt-get install git libzip-dev libpng-dev libjpeg62-turbo-dev libfreetype-dev -y

RUN pecl install xdebug apcu opcache gd \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install mysqli pdo pdo_mysql zip gd \
    && docker-php-ext-enable xdebug apcu opcache zip gd

WORKDIR /usr
RUN curl "https://getcomposer.org/installer" -o /usr/composer-setup.phar \
    && php /usr/composer-setup.phar \
    && cp /usr/composer.phar /usr/bin/composer

EXPOSE 9000

WORKDIR /var/www/html
