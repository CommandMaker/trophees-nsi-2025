DC=docker-compose
DE=$(DC) exec
USER_ID=$(shell id -u)
GROUP_ID=$(shell id -g)

.PHONY: dev
dev:
	$(DC) build
	USER_ID=$(USER_ID) GROUP_ID=$(GROUP_ID) $(DC) up

.PHONY: prepare-dev
prepare-dev:
	USER_ID=$(USER_ID) GROUP_ID=$(GROUP_ID) $(DE) php artisan migrate

.PHONY: lint
lint:
	USER_ID=$(USER_ID) GROUP_ID=$(GROUP_ID) $(DE) php ./vendor/bin/phpstan analyse --memory-limit=2G

.PHONY: format
format:
	USER_ID=$(USER_ID) GROUP_ID=$(GROUP_ID) $(DE) php ./vendor/bin/pint

.PHONY: prepare-commit
prepare-commit: lint format
	USER_ID=$(USER_ID) GROUP_ID=$(GROUP_ID) $(DE) node pnpm lint
	USER_ID=$(USER_ID) GROUP_ID=$(GROUP_ID) $(DE) node pnpm format
