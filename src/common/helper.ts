
export class HelperUtil {
  static getOffset(currentPage: number = 1, listPerPage: any) {
    return (currentPage - 1) * listPerPage;
  }

  static emptyOrRows(rows: any) {
    if (!rows) {
      return [];
    }
    return rows;
  }

}
