import * as clubRepository from "../respositories/clubs_repository";
import * as httpHelper from "../utils/http_helper";


export const getClubs = async () => {
    const clubs = await clubRepository.getAllClubs();
    if (clubs) return await httpHelper.ok(clubs);
    return await httpHelper.noContent();
};
