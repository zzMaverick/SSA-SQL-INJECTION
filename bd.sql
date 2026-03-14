CREATE TABLE users (
                     id SERIAL PRIMARY KEY,
                     username TEXT,
                     password TEXT
);

INSERT INTO users (username,password) VALUES ('admin','1234');
INSERT INTO users (username,password) VALUES ('joao','senha');
INSERT INTO users (username,password) VALUES ('maria','abc123');

