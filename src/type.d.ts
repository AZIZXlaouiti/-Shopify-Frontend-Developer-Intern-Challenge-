interface JQueryStatic extends JQueryProto {
    // $.fn
   fn: JQueryProto;
   formatDate(format: string, date: Date, settings?: JQueryUI.DatepickerFormatDateOptions | undefined);
}