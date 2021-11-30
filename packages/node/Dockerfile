# production images
FROM node:14 as builder
ARG RELEASE_VERSION=0.25.1-beta.3
ENTRYPOINT ["subql-node"]
RUN npm i -g --unsafe-perm bifrost-subql-node@${RELEASE_VERSION}

FROM node:14-alpine
ENV TZ utc

RUN apk add --no-cache tini git
COPY --from=builder /usr/local/lib/node_modules /usr/local/lib/node_modules

ENTRYPOINT ["/sbin/tini", "--", "/usr/local/lib/node_modules/bifrost-subql-node/bin/run"]
CMD ["-f","/app"]
