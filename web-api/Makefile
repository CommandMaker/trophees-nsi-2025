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
