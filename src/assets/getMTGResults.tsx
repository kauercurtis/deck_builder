import { MTGCard } from "@/types/single_cards/mtg";
import { delay } from "./delay";

const mtgAPI = "https://api.magicthegathering.io/v1/cards";

export async function GetMTGCard(){

    const mtgResponse = await fetch(mtgAPI);
    const mtgJSON = await mtgResponse.json();
    console.log(mtgJSON.cards);

}