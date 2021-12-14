import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { artistsData } from "./songs";

const prisma = new PrismaClient();

const run = async () => {
  await Promise.all(
    artistsData.map(async (artist) => {
      return prisma.artist.upsert({
        where: { name: artist.name },
        update: {},
        create: {
          name: artist.name,
          songs: {
            create: artist.songs.map((song) => ({
              name: song.name,
              duration: song.duration,
              url : song.url
            })),
          },
        },
      });
    })
  );
  const  salt = bcrypt.genSaltSync()
  const user = await prisma.user.upserts({
    where : {email : }
  })

};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .then()
  .finally(async () => {
    await prisma.$disconnect();
  });
