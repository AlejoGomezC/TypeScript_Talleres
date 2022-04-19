export class Serie{
    id: number;
    name: String;
    channel: String;
    seasons: number;
    description: String;
    link: String;
    image: String;
    constructor(id:number,completeName: string, channel: string, seasons:number, description:string, link:string,image:string){
        this.id = id;
        this.name = completeName;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}
