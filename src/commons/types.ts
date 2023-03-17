//

export interface IProject {
    id: string;
    name: string;
    imageUrl: string;
}

export interface IComment {
    project: string | undefined;
    text: string;
    position: [number, number] | null;
}