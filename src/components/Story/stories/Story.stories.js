import Story from "../Story";
import { faker } from "@faker-js/faker";
export default {
    title: 'Instagram Stories',
    component: Story,
    argTypes: {
        variacion: {
            control: 'select', 
            options: [
                "closeFriends", 
                "noVisto", 
                "visto"
            ] 
        }
    }
}


export const instaStory = {
    args: {
        username: faker.person.fullName(),
        image: faker.image.avatar(),
        variacion: "closeFriends"
    }
}


//variaciones
// 1. closeFriends - borde verde
// 2. noVisto - rosado
// 2. visto - borde blanco
