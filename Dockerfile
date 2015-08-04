# Use phusion/baseimage as base image.
FROM phusion/baseimage:0.9.16

RUN apt-get update && apt-get -y install git build-essential curl

RUN apt-get install -yq nginx make

RUN curl -sL https://deb.nodesource.com/setup | sudo bash -
RUN apt-get install -y nodejs && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN npm install -g n
RUN n 0.12.1

RUN mkdir /srv/www

ADD setup/default /etc/nginx/sites-available/default
ADD setup/nginx.conf /etc/nginx/nginx.conf

WORKDIR /srv/www

ADD /setup/start.sh /tmp/start.sh

RUN chmod +x /tmp/start.sh

ADD . /srv/www
RUN npm cache clean | npm install

RUN npm install -g gulp

RUN gulp build

EXPOSE 80

CMD /tmp/start.sh
