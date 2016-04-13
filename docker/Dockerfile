FROM mhart/alpine-node
MAINTAINER Luis Valenzuela [luis.valenzuela@ktc.com.mx]
RUN apk add --update make gcc g++ python git
RUN npm install -g deployd
WORKDIR /var/www/
RUN apk del make gcc g++ python && \
   rm -rf /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp
EXPOSE 80
RUN dpd create keys
WORKDIR /var/www/keys/
CMD dpd -H mongokeys -P 27017 -p 80 -d && sleep 3600
