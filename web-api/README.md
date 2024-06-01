# Web-API

This API is used to create a connection between all parts of the project, joining the training part with the real-case-usage part

## Installation

The API is based on PHP using the [Laravel](https://laravel.com) framework and the frontend use TypeScript and [VueJS](https://vuejs.org) to provide a better UX.

The API also embed the web part (the training website). Everything can be run under [Docker](https://docker.com) to provide a fast-way a simpler usage. We use custom PHP and NodeJS images to provide the required extensions needed by the [Laravel](https://laravel.com) framework.

To run the API, ensure you have [Docker](https://docker.com) and [docker-compose](https://docs.docker.com/compose)

```bash
# On UNIX-based system using make
make dev
make prepare-dev

# Or on Windows
docker-compose build
docker-compose up
docker compose exec php artisan migrate
```

The API will be served on port `8000`, phpmyadmin on the port `8080` and MailHog on the port `8025`

## Contribute

If you want to contribute (and we thank you for that) just be sure that the code follow the coding standards of the project

```bash
make tt     # Run phpstan & php-cs
pnpm lint   # Lint the frontend code
pnpm format # Run prettier
```

Code contributions are open. Feel free to clone, edit, or fork the project as you wish.
