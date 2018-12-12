#!/bin/bash

# debug
#set -x

# always run from project root
script_path=`dirname $0`
cd $script_path/..

# fail on any error
set -o errexit

# ensure persistent volume
docker volume create --name=local-cloudant-developer-persistent

# to remove the volume
#docker stop $(docker ps -aq)
#docker rm $(docker ps -aq)
#docker volume rm --force local-cloudant-developer-persistent

# start stack
docker-compose -f docker-compose.yml up -d

# inform user
echo "Local Cloudant instance has started and is available at http://localhost:8080/dashboard.html"
echo "Login with admin/pass"

exit 0
