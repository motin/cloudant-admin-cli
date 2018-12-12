# Cloudant Admin CLI

```
node index.js --create-db localdevtest
node index.js --reset-db localdevtest
```

## Start local Cloudant instance

```
stack/start.sh
```

To inspect database contents:
http://localhost:8080/dashboard.html

Login credentials:
```
username = admin
password = pass
```

Docs: https://hub.docker.com/r/ibmcom/cloudant-developer/

To stop the instance:

```
stack/stop.sh
```
