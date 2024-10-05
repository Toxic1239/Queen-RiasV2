FROM node:20


USER node


RUN git clone https://github.com/Toxic1239/Queen-RiasV2 home/node/blue


WORKDIR /home/node/blue


RUN chmod -R 777 /home/node/blue/


RUN yarn install && yarn add http


COPY server.js .


COPY start.sh .


CMD ["bash","start.sh" ]