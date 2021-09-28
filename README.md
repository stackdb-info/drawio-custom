## Choosing the .env

### Development

```bash
docker-compose --env-file .env.dev -f compose.yml -f compose-dev.yml up # dev
```

Navigate to [http://localhost:8080/](http://localhost:8080/)

### Production

```bash
docker-compose -f compose.yml -f compose-prod.yml  up
```