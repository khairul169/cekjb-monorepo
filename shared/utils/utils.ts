/**
 * Serialize object for next js props
 * @param data any
 * @returns serialized object
 */
export const nextJson = (data: any) => JSON.parse(JSON.stringify(data));
