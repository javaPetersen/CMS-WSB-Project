#!/bin/bash
docker image prune -af #czyści stare obrazy dockerowe
docker-compose down #dropuje aktualny docker-compose
docker-compose build #buduje docker-compose
docker-compose up -d #startuje docker-compose w tle