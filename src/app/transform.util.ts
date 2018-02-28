export class TransformUtil {
    public static Transform<O, D>(body: O | any, destinyModel: D | any) {
        if (body instanceof Array) {
            return body.map(data => new destinyModel(data)) || [];
        }

        return new destinyModel(body) || {};
    }
}
