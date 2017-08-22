# Template

TODO: Description

Prerequisites:
* TODO

## Project Setup

TODO: Clone and install dependencies

## Database Setup (development)

### Install postgresql
* On Mac OS X using Homebrew: `brew install postgresql`
  * Start service: check [LaunchRocket](https://github.com/jimbojsb/launchrocket) or [lunchy](https://www.moncefbelyamani.com/how-to-install-postgresql-on-a-mac-with-homebrew-and-lunchy/) for postgresql service management
* [Other platforms](https://www.postgresql.org/download/)

### Create development database

```sh
createdb iic2513template_dev
```

### Run migrations
```sh
./node_modules/.bin/sequelize db:migrate
```

## Database Setup (production)

TODO
