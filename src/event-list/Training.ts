type Training = {
    date: string;
    start: string;
    end: string;
}

export const isTraining = (training: unknown): training is Training => {
    return (training as Training).start !== undefined;
};

export default Training;