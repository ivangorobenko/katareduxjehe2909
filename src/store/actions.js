export const CREATE_APPLICATION_NAME = "CREATE_APPLICATION_NAME";

export const createApplicationName = () => {
    return {type: CREATE_APPLICATION_NAME, data: "MyApplication"};
}