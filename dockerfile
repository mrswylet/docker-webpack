FROM node:current

#  WORKDIR /app

RUN ls -l

# COPY ./package.json ./webpack.* ./yarn.lock ./
#
# RUN yarn install --frozen-lockfile
#
# COPY ./src/ ./src
#
# RUN NODE_ENV="production" npm run prod

COPY ./build/ ./build

CMD ["node", "./build/index.js"]
CMD ["ls -l"]
