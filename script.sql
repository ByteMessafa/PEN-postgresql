--create the database here --
CREATE DATABASE "animeDB"
    WITH
    OWNER = eduonix
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


-- Table: public.anime-members

-- DROP TABLE IF EXISTS public."anime-members";

CREATE TABLE IF NOT EXISTS public."anime-members"
(
    id integer NOT NULL DEFAULT nextval('"anime-members_id_seq"'::regclass),
    CONSTRAINT "anime-members_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."anime-members"
    OWNER to postgres;



--create columns for the anime-members table --
ALTER TABLE IF EXISTS public."anime-members"
    ADD COLUMN id serial NOT NULL PRIMARY KEY;


ALTER TABLE IF EXISTS public."anime-members"
    ADD COLUMN parsonal_name character(30) NOT NULL;



ALTER TABLE IF EXISTS public."anime-members"
    ADD COLUMN anime_name character(50) NOT NULL;
