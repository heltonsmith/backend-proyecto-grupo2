import db from '../db/pet.db'
import { Pet } from '../models/interfaces'

const getPets =  async (pet_id: number, username:string) : Promise<Pet[]> => {

    console.log("service getAllPets")
    const pets = await db.getPets(pet_id, username)

    return pets

}

export default { getPets }