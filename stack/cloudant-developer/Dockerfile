FROM ibmcom/cloudant-developer:latest

RUN \
  sed -i 's/enable_cors = false/enable_cors = true/g' /opt/cloudant/etc/default.ini && \
  sed -i 's/\[cors\]/\[cors\]\norigins=*/g' /opt/cloudant/etc/default.ini && \
  sed -i 's/credentials = false/credentials = true/g' /opt/cloudant/etc/default.ini
