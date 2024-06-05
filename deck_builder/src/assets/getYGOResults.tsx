import { YGOCard } from "@/types/single_cards/ygo";
import ygoCards from "@/data/cardinfo.json"
import { delay } from "./delay";

const mtgAPI = "https://api.magicthegathering.io/v1/cards";

export async function GetYGOCard(){

    console.log(ygoCards);

}