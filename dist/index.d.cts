/// <reference types="node" />

import { Element as Element_2 } from 'xml-js';
import { Stream } from 'stream';

export declare class AbstractNumbering extends XmlComponent {
    readonly id: number;
    constructor(id: number, levelOptions: readonly ILevelsOptions[]);
}

export declare const abstractNumUniqueNumericIdGen: () => UniqueNumericIdCreator;

export declare class Alignment extends XmlComponent {
    constructor(type: (typeof AlignmentType)[keyof typeof AlignmentType]);
}

export declare class AlignmentAttributes extends XmlAttributeComponent<{
    readonly val: (typeof AlignmentType)[keyof typeof AlignmentType];
}> {
    protected readonly xmlKeys: {
        val: string;
    };
}

export declare const AlignmentType: {
    readonly START: "start";
    readonly CENTER: "center";
    readonly END: "end";
    readonly BOTH: "both";
    readonly MEDIUM_KASHIDA: "mediumKashida";
    readonly DISTRIBUTE: "distribute";
    readonly NUM_TAB: "numTab";
    readonly HIGH_KASHIDA: "highKashida";
    readonly LOW_KASHIDA: "lowKashida";
    readonly THAI_DISTRIBUTE: "thaiDistribute";
    readonly LEFT: "left";
    readonly RIGHT: "right";
    readonly JUSTIFIED: "both";
};

export declare class AnnotationReference extends EmptyElement {
    constructor();
}

declare class AppProperties extends XmlComponent {
    constructor();
}

export declare type AttributeData = Record<string, boolean | number | string>;

export declare type AttributeMap<T> = Record<keyof T, string>;

export declare type AttributePayload<T> = {
    readonly [P in keyof T]: {
        readonly key: string;
        readonly value: T[P];
    };
};

export declare class Attributes extends XmlAttributeComponent<{
    readonly val?: string | number | boolean;
    readonly color?: string;
    readonly fill?: string;
    readonly space?: string;
    readonly sz?: string;
    readonly type?: string;
    readonly rsidR?: string;
    readonly rsidRPr?: string;
    readonly rsidSect?: string;
    readonly w?: string;
    readonly h?: string;
    readonly top?: string;
    readonly right?: string;
    readonly bottom?: string;
    readonly left?: string;
    readonly header?: string;
    readonly footer?: string;
    readonly gutter?: string;
    readonly linePitch?: string;
    readonly pos?: string | number;
}> {
    protected readonly xmlKeys: {
        val: string;
        color: string;
        fill: string;
        space: string;
        sz: string;
        type: string;
        rsidR: string;
        rsidRPr: string;
        rsidSect: string;
        w: string;
        h: string;
        top: string;
        right: string;
        bottom: string;
        left: string;
        header: string;
        footer: string;
        gutter: string;
        linePitch: string;
        pos: string;
    };
}

export declare abstract class BaseEmphasisMark extends XmlComponent {
    protected constructor(emphasisMarkType: (typeof EmphasisMarkType)[keyof typeof EmphasisMarkType]);
}

export declare abstract class BaseXmlComponent {
    protected readonly rootKey: string;
    constructor(rootKey: string);
    abstract prepForXml(context: IContext): IXmlableObject | undefined;
}

declare class Begin extends XmlComponent {
    constructor(dirty?: boolean);
}

declare class Body_2 extends XmlComponent {
    private readonly sections;
    constructor();
    addSection(options: ISectionPropertiesOptions): void;
    prepForXml(context: IContext): IXmlableObject | undefined;
    push(component: XmlComponent): void;
    private createSectionParagraph;
}
export { Body_2 as Body }

export declare class Bookmark {
    private readonly bookmarkUniqueNumericId;
    readonly start: BookmarkStart;
    readonly children: readonly ParagraphChild[];
    readonly end: BookmarkEnd;
    constructor(options: {
        readonly id: string;
        readonly children: readonly ParagraphChild[];
    });
}

export declare class BookmarkEnd extends XmlComponent {
    constructor(linkId: number);
}

export declare class BookmarkStart extends XmlComponent {
    constructor(id: string, linkId: number);
}

export declare const bookmarkUniqueNumericIdGen: () => UniqueNumericIdCreator;

export declare class Border extends IgnoreIfEmptyXmlComponent {
    constructor(options: IBordersOptions);
}

export declare class BorderElement extends XmlComponent {
    constructor(elementName: string, { color, size, space, style }: IBorderOptions);
}

export declare const BorderStyle: {
    readonly SINGLE: "single";
    readonly DASH_DOT_STROKED: "dashDotStroked";
    readonly DASHED: "dashed";
    readonly DASH_SMALL_GAP: "dashSmallGap";
    readonly DOT_DASH: "dotDash";
    readonly DOT_DOT_DASH: "dotDotDash";
    readonly DOTTED: "dotted";
    readonly DOUBLE: "double";
    readonly DOUBLE_WAVE: "doubleWave";
    readonly INSET: "inset";
    readonly NIL: "nil";
    readonly NONE: "none";
    readonly OUTSET: "outset";
    readonly THICK: "thick";
    readonly THICK_THIN_LARGE_GAP: "thickThinLargeGap";
    readonly THICK_THIN_MEDIUM_GAP: "thickThinMediumGap";
    readonly THICK_THIN_SMALL_GAP: "thickThinSmallGap";
    readonly THIN_THICK_LARGE_GAP: "thinThickLargeGap";
    readonly THIN_THICK_MEDIUM_GAP: "thinThickMediumGap";
    readonly THIN_THICK_SMALL_GAP: "thinThickSmallGap";
    readonly THIN_THICK_THIN_LARGE_GAP: "thinThickThinLargeGap";
    readonly THIN_THICK_THIN_MEDIUM_GAP: "thinThickThinMediumGap";
    readonly THIN_THICK_THIN_SMALL_GAP: "thinThickThinSmallGap";
    readonly THREE_D_EMBOSS: "threeDEmboss";
    readonly THREE_D_ENGRAVE: "threeDEngrave";
    readonly TRIPLE: "triple";
    readonly WAVE: "wave";
};

declare class Break extends XmlComponent {
    constructor();
}

export declare class BuilderElement<T extends AttributeData> extends XmlComponent {
    constructor({ name, attributes, children, }: {
        readonly name: string;
        readonly attributes?: AttributePayload<T>;
        readonly children?: readonly XmlComponent[];
    });
}

export declare class CarriageReturn extends EmptyElement {
    constructor();
}

export declare const CharacterSet: {
    readonly ANSI: "00";
    readonly DEFAULT: "01";
    readonly SYMBOL: "02";
    readonly MAC: "4D";
    readonly JIS: "80";
    readonly HANGUL: "81";
    readonly JOHAB: "82";
    readonly GB_2312: "86";
    readonly CHINESEBIG5: "88";
    readonly GREEK: "A1";
    readonly TURKISH: "A2";
    readonly VIETNAMESE: "A3";
    readonly HEBREW: "B1";
    readonly ARABIC: "B2";
    readonly BALTIC: "BA";
    readonly RUSSIAN: "CC";
    readonly THAI: "DE";
    readonly EASTEUROPE: "EE";
    readonly OEM: "FF";
};

export declare class CheckBox extends XmlComponent {
    private readonly DEFAULT_UNCHECKED_SYMBOL;
    private readonly DEFAULT_CHECKED_SYMBOL;
    private readonly DEFAULT_FONT;
    constructor(options?: ICheckboxSymbolOptions);
}

export declare class CheckBoxSymbolElement extends XmlComponent {
    constructor(name: string, val: string, font?: string);
}

export declare class CheckBoxUtil extends XmlComponent {
    private readonly DEFAULT_UNCHECKED_SYMBOL;
    private readonly DEFAULT_CHECKED_SYMBOL;
    private readonly DEFAULT_FONT;
    constructor(options?: ICheckboxSymbolOptions);
}

export declare class Column extends XmlComponent {
    constructor({ width, space }: IColumnAttributes);
}

export declare class ColumnBreak extends Run {
    constructor();
}

export declare class Columns extends XmlComponent {
    constructor({ space, count, separate, equalWidth, children }: IColumnsAttributes);
}

declare class Comment_2 extends XmlComponent {
    constructor({ id, initials, author, date, children }: ICommentOptions);
}
export { Comment_2 as Comment }

export declare class CommentRangeEnd extends XmlComponent {
    constructor(id: number);
}

export declare class CommentRangeStart extends XmlComponent {
    constructor(id: number);
}

export declare class CommentReference extends XmlComponent {
    constructor(id: number);
}

export declare class Comments extends XmlComponent {
    constructor({ children }: ICommentsOptions);
}

declare const CompoundLine: {
    readonly SINGLE: "sng";
    readonly DOUBLE: "dbl";
    readonly THICK_THIN: "thickThin";
    readonly THIN_THICK: "thinThick";
    readonly TRI: "tri";
};

export declare class ConcreteHyperlink extends XmlComponent {
    readonly linkId: string;
    constructor(children: readonly ParagraphChild[], relationshipId: string, anchor?: string);
}

export declare class ConcreteNumbering extends XmlComponent {
    readonly numId: number;
    readonly reference: string;
    readonly instance: number;
    constructor(options: IConcreteNumberingOptions);
}

export declare const concreteNumUniqueNumericIdGen: () => UniqueNumericIdCreator;

declare class ContentTypes extends XmlComponent {
    constructor();
    addFooter(index: number): void;
    addHeader(index: number): void;
}

export declare class ContinuationSeparator extends EmptyElement {
    constructor();
}

export declare const convertInchesToTwip: (inches: number) => number;

export declare const convertMillimetersToTwip: (millimeters: number) => number;

export declare const convertToXmlComponent: (element: Element_2) => ImportedXmlComponent | string | undefined;

declare type CoreImageOptions = {
    readonly transformation: IMediaTransformation;
    readonly floating?: IFloating;
    readonly altText?: DocPropertiesOptions;
    readonly outline?: OutlineOptions;
};

declare type CoreMediaData = {
    readonly fileName: string;
    readonly transformation: IMediaDataTransformation;
    readonly data: Buffer | Uint8Array | ArrayBuffer;
};

declare class CoreProperties extends XmlComponent {
    constructor(options: Omit<IPropertiesOptions, "sections">);
}

export declare const createFrameProperties: (options: IFrameOptions) => XmlComponent;

export declare const createLineNumberType: ({ countBy, start, restart, distance }: ILineNumberAttributes) => XmlComponent;

export declare const createStringElement: (name: string, value: string) => XmlComponent;

declare class CustomProperties extends XmlComponent {
    private nextId;
    private readonly properties;
    constructor(properties: readonly ICustomPropertyOptions[]);
    prepForXml(context: IContext): IXmlableObject | undefined;
    addCustomProperty(property: ICustomPropertyOptions): void;
}

export declare const dateTimeValue: (val: Date) => string;

export declare class DayLong extends EmptyElement {
    constructor();
}

export declare class DayShort extends EmptyElement {
    constructor();
}

export declare const decimalNumber: (val: number) => number;

export declare class DeletedTextRun extends XmlComponent {
    protected readonly deletedTextRunWrapper: DeletedTextRunWrapper;
    constructor(options: IDeletedRunOptions);
}

declare class DeletedTextRunWrapper extends XmlComponent {
    constructor(options: IRunOptions);
}

export declare class DocGridAttributes extends XmlAttributeComponent<IDocGridAttributesProperties> {
    protected readonly xmlKeys: {
        type: string;
        linePitch: string;
        charSpace: string;
    };
}

declare type DocPropertiesOptions = {
    readonly name: string;
    readonly description: string;
    readonly title: string;
};

export declare const docPropertiesUniqueNumericIdGen: () => UniqueNumericIdCreator;

declare class Document_2 extends XmlComponent {
    private readonly body;
    constructor(options: IDocumentOptions);
    add(item: Paragraph | Table | TableOfContents | ConcreteHyperlink): Document_2;
    get Body(): Body_2;
}

export declare type DocumentAttributeNamespace = keyof typeof DocumentAttributeNamespaces;

export declare const DocumentAttributeNamespaces: {
    wpc: string;
    mc: string;
    o: string;
    r: string;
    m: string;
    v: string;
    wp14: string;
    wp: string;
    w10: string;
    w: string;
    w14: string;
    w15: string;
    wpg: string;
    wpi: string;
    wne: string;
    wps: string;
    cp: string;
    dc: string;
    dcterms: string;
    dcmitype: string;
    xsi: string;
    cx: string;
    cx1: string;
    cx2: string;
    cx3: string;
    cx4: string;
    cx5: string;
    cx6: string;
    cx7: string;
    cx8: string;
    aink: string;
    am3d: string;
    w16cex: string;
    w16cid: string;
    w16: string;
    w16sdtdh: string;
    w16se: string;
};

export declare class DocumentAttributes extends XmlAttributeComponent<IDocumentAttributesProperties> {
    protected readonly xmlKeys: AttributeMap<IDocumentAttributesProperties>;
    constructor(ns: readonly DocumentAttributeNamespace[], Ignorable?: string);
}

export declare class DocumentBackground extends XmlComponent {
    constructor(options: IDocumentBackgroundOptions);
}

export declare class DocumentBackgroundAttributes extends XmlAttributeComponent<{
    readonly color?: string;
    readonly themeColor?: string;
    readonly themeShade?: string;
    readonly themeTint?: string;
}> {
    protected readonly xmlKeys: {
        color: string;
        themeColor: string;
        themeShade: string;
        themeTint: string;
    };
}

export declare class DocumentDefaults extends XmlComponent {
    private readonly runPropertiesDefaults;
    private readonly paragraphPropertiesDefaults;
    constructor(options: IDocumentDefaultsOptions);
}

export declare class DocumentGrid extends XmlComponent {
    constructor(linePitch: number, charSpace?: number, type?: (typeof DocumentGridType)[keyof typeof DocumentGridType]);
}

export declare const DocumentGridType: {
    readonly DEFAULT: "default";
    readonly LINES: "lines";
    readonly LINES_AND_CHARS: "linesAndChars";
    readonly SNAP_TO_CHARS: "snapToChars";
};

declare class DocumentWrapper implements IViewWrapper {
    private readonly document;
    private readonly relationships;
    constructor(options: IDocumentOptions);
    get View(): Document_2;
    get Relationships(): Relationships;
}

export declare class DotEmphasisMark extends BaseEmphasisMark {
    constructor();
}

export declare class Drawing extends XmlComponent {
    constructor(imageData: IMediaData, drawingOptions?: IDrawingOptions);
}

export declare const DropCapType: {
    readonly NONE: "none";
    readonly DROP: "drop";
    readonly MARGIN: "margin";
};

export declare const eighthPointMeasureValue: (val: number) => number;

export declare class EmphasisMark extends BaseEmphasisMark {
    constructor(emphasisMarkType?: (typeof EmphasisMarkType)[keyof typeof EmphasisMarkType]);
}

export declare const EmphasisMarkType: {
    readonly DOT: "dot";
};

export declare const EMPTY_OBJECT: {};

export declare class EmptyElement extends XmlComponent {
}

declare class End extends XmlComponent {
    constructor(dirty?: boolean);
}

export declare class EndnoteReference extends EmptyElement {
    constructor();
}

export declare class ExternalHyperlink extends XmlComponent {
    readonly options: {
        readonly children: readonly ParagraphChild[];
        readonly link: string;
    };
    constructor(options: {
        readonly children: readonly ParagraphChild[];
        readonly link: string;
    });
}

declare class FieldInstruction extends XmlComponent {
    private readonly properties;
    constructor(properties?: ITableOfContentsOptions);
}

declare class File_2 {
    private currentRelationshipId;
    private readonly documentWrapper;
    private readonly headers;
    private readonly footers;
    private readonly coreProperties;
    private readonly numbering;
    private readonly media;
    private readonly fileRelationships;
    private readonly footnotesWrapper;
    private readonly settings;
    private readonly contentTypes;
    private readonly customProperties;
    private readonly appProperties;
    private readonly styles;
    private readonly comments;
    private readonly fontWrapper;
    constructor(options: IPropertiesOptions);
    private addSection;
    private createHeader;
    private createFooter;
    private addHeaderToDocument;
    private addFooterToDocument;
    private addDefaultRelationships;
    get Document(): DocumentWrapper;
    get Styles(): Styles;
    get CoreProperties(): CoreProperties;
    get Numbering(): Numbering;
    get Media(): Media;
    get FileRelationships(): Relationships;
    get Headers(): readonly HeaderWrapper[];
    get Footers(): readonly FooterWrapper[];
    get ContentTypes(): ContentTypes;
    get CustomProperties(): CustomProperties;
    get AppProperties(): AppProperties;
    get FootNotes(): FootnotesWrapper;
    get Settings(): Settings;
    get Comments(): Comments;
    get FontTable(): FontWrapper;
}
export { File_2 as Document }
export { File_2 as File }

export declare class FileChild extends XmlComponent {
    readonly fileChild: symbol;
}

declare type FilePatch = {
    readonly type: typeof PatchType.DOCUMENT;
    readonly children: readonly FileChild[];
};

declare type FontOptions = {
    readonly name: string;
    readonly data: Buffer;
    readonly characterSet?: (typeof CharacterSet)[keyof typeof CharacterSet];
};

declare type FontOptionsWithKey = FontOptions & {
    readonly fontKey: string;
};

declare class FontWrapper implements IViewWrapper {
    readonly options: readonly FontOptions[];
    private readonly fontTable;
    private readonly relationships;
    readonly fontOptionsWithKey: readonly FontOptionsWithKey[];
    constructor(options: readonly FontOptions[]);
    get View(): XmlComponent;
    get Relationships(): Relationships;
}

export declare class Footer {
    readonly options: IHeaderOptions;
    constructor(options?: IHeaderOptions);
}

declare class Footer_2 extends InitializableXmlComponent {
    private readonly refId;
    constructor(referenceNumber: number, initContent?: XmlComponent);
    get ReferenceId(): number;
    add(item: Paragraph | Table): void;
}

export declare class FooterWrapper implements IViewWrapper {
    private readonly media;
    private readonly footer;
    private readonly relationships;
    constructor(media: Media, referenceId: number, initContent?: XmlComponent);
    add(item: Paragraph | Table): void;
    addChildElement(childElement: XmlComponent): void;
    get View(): Footer_2;
    get Relationships(): Relationships;
    get Media(): Media;
}

export declare class FootnoteReference extends XmlComponent {
    constructor(id: number);
}

export declare class FootnoteReferenceElement extends EmptyElement {
    constructor();
}

export declare class FootnoteReferenceRun extends Run {
    constructor(id: number);
}

export declare class FootNoteReferenceRunAttributes extends XmlAttributeComponent<{
    readonly id: number;
}> {
    protected readonly xmlKeys: {
        id: string;
    };
}

export declare class FootNotes extends XmlComponent {
    constructor();
    createFootNote(id: number, paragraph: readonly Paragraph[]): void;
}

declare class FootnotesWrapper implements IViewWrapper {
    private readonly footnotess;
    private readonly relationships;
    constructor();
    get View(): FootNotes;
    get Relationships(): Relationships;
}

export declare const FrameAnchorType: {
    readonly MARGIN: "margin";
    readonly PAGE: "page";
    readonly TEXT: "text";
};

export declare const FrameWrap: {
    readonly AROUND: "around";
    readonly AUTO: "auto";
    readonly NONE: "none";
    readonly NOT_BESIDE: "notBeside";
    readonly THROUGH: "through";
    readonly TIGHT: "tight";
};

export declare class GridSpan extends XmlComponent {
    constructor(value: number);
}

export declare const hashedId: (data: Buffer | string | Uint8Array | ArrayBuffer) => string;

export declare class Header {
    readonly options: IHeaderOptions;
    constructor(options?: IHeaderOptions);
}

declare class Header_2 extends InitializableXmlComponent {
    private readonly refId;
    constructor(referenceNumber: number, initContent?: XmlComponent);
    get ReferenceId(): number;
    add(item: Paragraph | Table): void;
}

export declare class HeaderFooterReference extends XmlComponent {
    constructor(type: (typeof HeaderFooterType)[keyof typeof HeaderFooterType], options: IHeaderFooterOptions);
}

export declare const HeaderFooterReferenceType: {
    readonly DEFAULT: "default";
    readonly FIRST: "first";
    readonly EVEN: "even";
};

export declare const HeaderFooterType: {
    readonly HEADER: "w:headerReference";
    readonly FOOTER: "w:footerReference";
};

export declare class HeaderWrapper implements IViewWrapper {
    private readonly media;
    private readonly header;
    private readonly relationships;
    constructor(media: Media, referenceId: number, initContent?: XmlComponent);
    add(item: Paragraph | Table): HeaderWrapper;
    addChildElement(childElement: XmlComponent | string): void;
    get View(): Header_2;
    get Relationships(): Relationships;
    get Media(): Media;
}

export declare const HeadingLevel: {
    readonly HEADING_1: "Heading1";
    readonly HEADING_2: "Heading2";
    readonly HEADING_3: "Heading3";
    readonly HEADING_4: "Heading4";
    readonly HEADING_5: "Heading5";
    readonly HEADING_6: "Heading6";
    readonly TITLE: "Title";
};

export declare const HeightRule: {
    readonly AUTO: "auto";
    readonly ATLEAST: "atLeast";
    readonly EXACT: "exact";
};

export declare const hexColorValue: (val: string) => string;

export declare const HighlightColor: {
    readonly BLACK: "black";
    readonly BLUE: "blue";
    readonly CYAN: "cyan";
    readonly DARK_BLUE: "darkBlue";
    readonly DARK_CYAN: "darkCyan";
    readonly DARK_GRAY: "darkGray";
    readonly DARK_GREEN: "darkGreen";
    readonly DARK_MAGENTA: "darkMagenta";
    readonly DARK_RED: "darkRed";
    readonly DARK_YELLOW: "darkYellow";
    readonly GREEN: "green";
    readonly LIGHT_GRAY: "lightGray";
    readonly MAGENTA: "magenta";
    readonly NONE: "none";
    readonly RED: "red";
    readonly WHITE: "white";
    readonly YELLOW: "yellow";
};

export declare class HorizontalPosition extends XmlComponent {
    constructor(horizontalPosition: IHorizontalPositionOptions);
}

export declare const HorizontalPositionAlign: {
    readonly CENTER: "center";
    readonly INSIDE: "inside";
    readonly LEFT: "left";
    readonly OUTSIDE: "outside";
    readonly RIGHT: "right";
};

export declare const HorizontalPositionRelativeFrom: {
    readonly CHARACTER: "character";
    readonly COLUMN: "column";
    readonly INSIDE_MARGIN: "insideMargin";
    readonly LEFT_MARGIN: "leftMargin";
    readonly MARGIN: "margin";
    readonly OUTSIDE_MARGIN: "outsideMargin";
    readonly PAGE: "page";
    readonly RIGHT_MARGIN: "rightMargin";
};

export declare class HpsMeasureElement extends XmlComponent {
    constructor(name: string, val: number | PositiveUniversalMeasure);
}

export declare const hpsMeasureValue: (val: PositiveUniversalMeasure | number) => string | number;

export declare const HyperlinkType: {
    readonly INTERNAL: "INTERNAL";
    readonly EXTERNAL: "EXTERNAL";
};

export declare type IAlignmentFrameOptions = {
    readonly type: "alignment";
    readonly alignment: {
        readonly x: (typeof HorizontalPositionAlign)[keyof typeof HorizontalPositionAlign];
        readonly y: (typeof VerticalPositionAlign)[keyof typeof VerticalPositionAlign];
    };
} & IBaseFrameOptions;

export declare type IBaseCharacterStyleOptions = {
    readonly run?: IRunStylePropertiesOptions;
} & IStyleOptions;

declare type IBaseFrameOptions = {
    readonly anchorLock?: boolean;
    readonly dropCap?: (typeof DropCapType)[keyof typeof DropCapType];
    readonly width: number;
    readonly height: number;
    readonly wrap?: (typeof FrameWrap)[keyof typeof FrameWrap];
    readonly lines?: number;
    readonly anchor: {
        readonly horizontal: (typeof FrameAnchorType)[keyof typeof FrameAnchorType];
        readonly vertical: (typeof FrameAnchorType)[keyof typeof FrameAnchorType];
    };
    readonly space?: {
        readonly horizontal: number;
        readonly vertical: number;
    };
    readonly rule?: (typeof HeightRule)[keyof typeof HeightRule];
};

export declare type IBaseParagraphStyleOptions = {
    readonly paragraph?: IParagraphStylePropertiesOptions;
    readonly run?: IRunStylePropertiesOptions;
} & IStyleOptions;

export declare type IBorderOptions = {
    readonly style: (typeof BorderStyle)[keyof typeof BorderStyle];
    readonly color?: string;
    readonly size?: number;
    readonly space?: number;
};

export declare type IBordersOptions = {
    readonly top?: IBorderOptions;
    readonly bottom?: IBorderOptions;
    readonly left?: IBorderOptions;
    readonly right?: IBorderOptions;
};

declare type IChangedAttributesProperties = {
    readonly id: number;
    readonly author: string;
    readonly date: string;
};

export declare type ICharacterStyleOptions = {
    readonly id: string;
} & IBaseCharacterStyleOptions;

export declare type ICheckboxSymbolOptions = {
    readonly alias?: string;
    readonly checked?: boolean;
    readonly checkedState?: ICheckboxSymbolProperties;
    readonly uncheckedState?: ICheckboxSymbolProperties;
};

export declare type ICheckboxSymbolProperties = {
    readonly value?: string;
    readonly font?: string;
};

declare type IColumnAttributes = {
    readonly width: number | PositiveUniversalMeasure;
    readonly space?: number | PositiveUniversalMeasure;
};

export declare type IColumnsAttributes = {
    readonly space?: number | PositiveUniversalMeasure;
    readonly count?: number;
    readonly separate?: boolean;
    readonly equalWidth?: boolean;
    readonly children?: readonly Column[];
};

export declare type ICommentOptions = {
    readonly id: number;
    readonly children: readonly FileChild[];
    readonly initials?: string;
    readonly author?: string;
    readonly date?: Date;
};

export declare type ICommentsOptions = {
    readonly children: readonly ICommentOptions[];
};

declare type ICompatibilityOptions = {
    readonly version?: number;
    readonly useSingleBorderforContiguousCells?: boolean;
    readonly wordPerfectJustification?: boolean;
    readonly noTabStopForHangingIndent?: boolean;
    readonly noLeading?: boolean;
    readonly spaceForUnderline?: boolean;
    readonly noColumnBalance?: boolean;
    readonly balanceSingleByteDoubleByteWidth?: boolean;
    readonly noExtraLineSpacing?: boolean;
    readonly doNotLeaveBackslashAlone?: boolean;
    readonly underlineTrailingSpaces?: boolean;
    readonly doNotExpandShiftReturn?: boolean;
    readonly spacingInWholePoints?: boolean;
    readonly lineWrapLikeWord6?: boolean;
    readonly printBodyTextBeforeHeader?: boolean;
    readonly printColorsBlack?: boolean;
    readonly spaceWidth?: boolean;
    readonly showBreaksInFrames?: boolean;
    readonly subFontBySize?: boolean;
    readonly suppressBottomSpacing?: boolean;
    readonly suppressTopSpacing?: boolean;
    readonly suppressSpacingAtTopOfPage?: boolean;
    readonly suppressTopSpacingWP?: boolean;
    readonly suppressSpBfAfterPgBrk?: boolean;
    readonly swapBordersFacingPages?: boolean;
    readonly convertMailMergeEsc?: boolean;
    readonly truncateFontHeightsLikeWP6?: boolean;
    readonly macWordSmallCaps?: boolean;
    readonly usePrinterMetrics?: boolean;
    readonly doNotSuppressParagraphBorders?: boolean;
    readonly wrapTrailSpaces?: boolean;
    readonly footnoteLayoutLikeWW8?: boolean;
    readonly shapeLayoutLikeWW8?: boolean;
    readonly alignTablesRowByRow?: boolean;
    readonly forgetLastTabAlignment?: boolean;
    readonly adjustLineHeightInTable?: boolean;
    readonly autoSpaceLikeWord95?: boolean;
    readonly noSpaceRaiseLower?: boolean;
    readonly doNotUseHTMLParagraphAutoSpacing?: boolean;
    readonly layoutRawTableWidth?: boolean;
    readonly layoutTableRowsApart?: boolean;
    readonly useWord97LineBreakRules?: boolean;
    readonly doNotBreakWrappedTables?: boolean;
    readonly doNotSnapToGridInCell?: boolean;
    readonly selectFieldWithFirstOrLastCharacter?: boolean;
    readonly applyBreakingRules?: boolean;
    readonly doNotWrapTextWithPunctuation?: boolean;
    readonly doNotUseEastAsianBreakRules?: boolean;
    readonly useWord2002TableStyleRules?: boolean;
    readonly growAutofit?: boolean;
    readonly useFELayout?: boolean;
    readonly useNormalStyleForList?: boolean;
    readonly doNotUseIndentAsNumberingTabStop?: boolean;
    readonly useAlternateEastAsianLineBreakRules?: boolean;
    readonly allowSpaceOfSameStyleInTable?: boolean;
    readonly doNotSuppressIndentation?: boolean;
    readonly doNotAutofitConstrainedTables?: boolean;
    readonly autofitToFirstFixedWidthCell?: boolean;
    readonly underlineTabInNumberingList?: boolean;
    readonly displayHangulFixedWidth?: boolean;
    readonly splitPgBreakAndParaMark?: boolean;
    readonly doNotVerticallyAlignCellWithSp?: boolean;
    readonly doNotBreakConstrainedForcedTable?: boolean;
    readonly ignoreVerticalAlignmentInTextboxes?: boolean;
    readonly useAnsiKerningPairs?: boolean;
    readonly cachedColumnBalance?: boolean;
};

export declare type IConcreteNumberingOptions = {
    readonly numId: number;
    readonly abstractNumId: number;
    readonly reference: string;
    readonly instance: number;
    readonly overrideLevels?: readonly IOverrideLevel[];
};

export declare type IContext = {
    readonly file: File_2;
    readonly viewWrapper: IViewWrapper;
    readonly stack: IXmlableObject[];
};

declare type ICustomPropertyOptions = {
    readonly name: string;
    readonly value: string;
};

declare type IDefaultStylesOptions = {
    readonly document?: IDocumentDefaultsOptions;
    readonly title?: IBaseParagraphStyleOptions;
    readonly heading1?: IBaseParagraphStyleOptions;
    readonly heading2?: IBaseParagraphStyleOptions;
    readonly heading3?: IBaseParagraphStyleOptions;
    readonly heading4?: IBaseParagraphStyleOptions;
    readonly heading5?: IBaseParagraphStyleOptions;
    readonly heading6?: IBaseParagraphStyleOptions;
    readonly strong?: IBaseParagraphStyleOptions;
    readonly listParagraph?: IBaseParagraphStyleOptions;
    readonly hyperlink?: IBaseCharacterStyleOptions;
    readonly footnoteReference?: IBaseCharacterStyleOptions;
    readonly footnoteText?: IBaseParagraphStyleOptions;
    readonly footnoteTextChar?: IBaseCharacterStyleOptions;
};

declare type IDeletedRunOptions = IRunOptions & IChangedAttributesProperties;

export declare type IDistance = {
    readonly distT?: number;
    readonly distB?: number;
    readonly distL?: number;
    readonly distR?: number;
};

export declare type IDocGridAttributesProperties = {
    readonly type?: (typeof DocumentGridType)[keyof typeof DocumentGridType];
    readonly linePitch?: number;
    readonly charSpace?: number;
};

export declare type IDocumentAttributesProperties = Partial<Record<DocumentAttributeNamespace, string>> & {
    readonly Ignorable?: string;
};

export declare type IDocumentBackgroundOptions = {
    readonly color?: string;
    readonly themeColor?: string;
    readonly themeShade?: string;
    readonly themeTint?: string;
};

export declare type IDocumentDefaultsOptions = {
    readonly paragraph?: IParagraphStylePropertiesOptions;
    readonly run?: IRunStylePropertiesOptions;
};

export declare type IDocumentFooter = {
    readonly footer: FooterWrapper;
    readonly type: (typeof HeaderFooterReferenceType)[keyof typeof HeaderFooterReferenceType];
};

export declare type IDocumentHeader = {
    readonly header: HeaderWrapper;
    readonly type: (typeof HeaderFooterReferenceType)[keyof typeof HeaderFooterReferenceType];
};

export declare type IDocumentOptions = {
    readonly background?: IDocumentBackgroundOptions;
};

export declare type IDrawingOptions = {
    readonly floating?: IFloating;
    readonly docProperties?: DocPropertiesOptions;
    readonly outline?: OutlineOptions;
};

export declare type IFloating = {
    readonly horizontalPosition: IHorizontalPositionOptions;
    readonly verticalPosition: IVerticalPositionOptions;
    readonly allowOverlap?: boolean;
    readonly lockAnchor?: boolean;
    readonly behindDocument?: boolean;
    readonly layoutInCell?: boolean;
    readonly margins?: IMargins;
    readonly wrap?: ITextWrapping;
    readonly zIndex?: number;
};

export declare type IFontAttributesProperties = {
    readonly ascii?: string;
    readonly cs?: string;
    readonly eastAsia?: string;
    readonly hAnsi?: string;
    readonly hint?: string;
};

declare type IFontOptions = {
    readonly name: string;
    readonly hint?: string;
};

export declare type IFrameOptions = IXYFrameOptions | IAlignmentFrameOptions;

export declare abstract class IgnoreIfEmptyXmlComponent extends XmlComponent {
    prepForXml(context: IContext): IXmlableObject | undefined;
}

export declare type IHeaderFooterGroup<T> = {
    readonly default?: T;
    readonly first?: T;
    readonly even?: T;
};

export declare type IHeaderFooterOptions = {
    readonly type?: (typeof HeaderFooterReferenceType)[keyof typeof HeaderFooterReferenceType];
    readonly id?: number;
};

export declare type IHeaderOptions = {
    readonly children: readonly (Paragraph | Table)[];
};

export declare type IHorizontalPositionOptions = {
    readonly relative?: (typeof HorizontalPositionRelativeFrom)[keyof typeof HorizontalPositionRelativeFrom];
    readonly align?: (typeof HorizontalPositionAlign)[keyof typeof HorizontalPositionAlign];
    readonly offset?: number;
};

declare type IHyphenationOptions = {
    readonly autoHyphenation?: boolean;
    readonly hyphenationZone?: number;
    readonly consecutiveHyphenLimit?: number;
    readonly doNotHyphenateCaps?: boolean;
};

export declare type IImageOptions = (RegularImageOptions | SvgMediaOptions) & CoreImageOptions;

export declare type IIndentAttributesProperties = {
    readonly start?: number | UniversalMeasure;
    readonly end?: number | UniversalMeasure;
    readonly left?: number | UniversalMeasure;
    readonly right?: number | UniversalMeasure;
    readonly hanging?: number | PositiveUniversalMeasure;
    readonly firstLine?: number | PositiveUniversalMeasure;
};

declare type IInsertedRunOptions = IChangedAttributesProperties & IRunOptions;

declare type ILanguageOptions = {
    readonly value?: string;
    readonly eastAsia?: string;
    readonly bidirectional?: string;
};

export declare type ILevelParagraphStylePropertiesOptions = {
    readonly alignment?: (typeof AlignmentType)[keyof typeof AlignmentType];
    readonly thematicBreak?: boolean;
    readonly contextualSpacing?: boolean;
    readonly rightTabStop?: number;
    readonly leftTabStop?: number;
    readonly indent?: IIndentAttributesProperties;
    readonly spacing?: ISpacingProperties;
    readonly keepNext?: boolean;
    readonly keepLines?: boolean;
    readonly outlineLevel?: number;
};

export declare type ILevelsOptions = {
    readonly level: number;
    readonly format?: (typeof LevelFormat)[keyof typeof LevelFormat];
    readonly text?: string;
    readonly alignment?: (typeof AlignmentType)[keyof typeof AlignmentType];
    readonly start?: number;
    readonly suffix?: (typeof LevelSuffix)[keyof typeof LevelSuffix];
    readonly isLegalNumberingStyle?: boolean;
    readonly style?: {
        readonly run?: IRunStylePropertiesOptions;
        readonly paragraph?: ILevelParagraphStylePropertiesOptions;
    };
};

export declare type ILineNumberAttributes = {
    readonly countBy?: number;
    readonly start?: number;
    readonly restart?: (typeof LineNumberRestartFormat)[keyof typeof LineNumberRestartFormat];
    readonly distance?: number | PositiveUniversalMeasure;
};

export declare class ImageRun extends Run {
    private readonly imageData;
    constructor(options: IImageOptions);
    prepForXml(context: IContext): IXmlableObject | undefined;
}

export declare type IMargins = {
    readonly left?: number;
    readonly bottom?: number;
    readonly top?: number;
    readonly right?: number;
};

export declare type IMathFractionOptions = {
    readonly numerator: readonly MathComponent[];
    readonly denominator: readonly MathComponent[];
};

export declare type IMathFunctionOptions = {
    readonly children: readonly MathComponent[];
    readonly name: readonly MathComponent[];
};

export declare type IMathIntegralOptions = {
    readonly children: readonly MathComponent[];
    readonly subScript?: readonly MathComponent[];
    readonly superScript?: readonly MathComponent[];
};

export declare type IMathLimitLowerOptions = {
    readonly children: readonly MathComponent[];
    readonly limit: readonly MathComponent[];
};

export declare type IMathLimitUpperOptions = {
    readonly children: readonly MathComponent[];
    readonly limit: readonly MathComponent[];
};

export declare type IMathOptions = {
    readonly children: readonly MathComponent[];
};

export declare type IMathPreSubSuperScriptOptions = {
    readonly children: readonly MathComponent[];
    readonly subScript: readonly MathComponent[];
    readonly superScript: readonly MathComponent[];
};

export declare type IMathRadicalOptions = {
    readonly children: readonly MathComponent[];
    readonly degree?: readonly MathComponent[];
};

export declare type IMathSubScriptOptions = {
    readonly children: readonly MathComponent[];
    readonly subScript: readonly MathComponent[];
};

export declare type IMathSubSuperScriptOptions = {
    readonly children: readonly MathComponent[];
    readonly subScript: readonly MathComponent[];
    readonly superScript: readonly MathComponent[];
};

export declare type IMathSumOptions = {
    readonly children: readonly MathComponent[];
    readonly subScript?: readonly MathComponent[];
    readonly superScript?: readonly MathComponent[];
};

export declare type IMathSuperScriptOptions = {
    readonly children: readonly MathComponent[];
    readonly superScript: readonly MathComponent[];
};

export declare type IMediaData = (RegularMediaData | SvgMediaData) & CoreMediaData;

export declare type IMediaDataTransformation = {
    readonly pixels: {
        readonly x: number;
        readonly y: number;
    };
    readonly emus: {
        readonly x: number;
        readonly y: number;
    };
    readonly flip?: {
        readonly vertical?: boolean;
        readonly horizontal?: boolean;
    };
    readonly rotation?: number;
};

export declare type IMediaTransformation = {
    readonly width: number;
    readonly height: number;
    readonly flip?: {
        readonly vertical?: boolean;
        readonly horizontal?: boolean;
    };
    readonly rotation?: number;
};

export declare class ImportedRootElementAttributes extends XmlComponent {
    private readonly _attr;
    constructor(_attr: any);
    prepForXml(_: IContext): IXmlableObject;
}

export declare class ImportedXmlComponent extends XmlComponent {
    static fromXmlString(importedContent: string): ImportedXmlComponent;
    constructor(rootKey: string, _attr?: any);
    push(xmlComponent: XmlComponent | string): void;
}

export declare class Indent extends XmlComponent {
    constructor({ start, end, left, right, hanging, firstLine }: IIndentAttributesProperties);
}

export declare abstract class InitializableXmlComponent extends XmlComponent {
    constructor(rootKey: string, initComponent?: InitializableXmlComponent);
}

export declare type InputDataType = Buffer | string | number[] | Uint8Array | ArrayBuffer | Blob | NodeJS.ReadableStream;

export declare class InsertedTextRun extends XmlComponent {
    constructor(options: IInsertedRunOptions);
}

export declare class InternalHyperlink extends ConcreteHyperlink {
    constructor(options: {
        readonly children: readonly ParagraphChild[];
        readonly anchor: string;
    });
}

export declare type INumberingOptions = {
    readonly config: readonly {
        readonly levels: readonly ILevelsOptions[];
        readonly reference: string;
    }[];
};

declare type IOverrideLevel = {
    readonly num: number;
    readonly start?: number;
};

export declare type IPageBorderAttributes = {
    readonly display?: (typeof PageBorderDisplay)[keyof typeof PageBorderDisplay];
    readonly offsetFrom?: (typeof PageBorderOffsetFrom)[keyof typeof PageBorderOffsetFrom];
    readonly zOrder?: (typeof PageBorderZOrder)[keyof typeof PageBorderZOrder];
};

export declare type IPageBordersOptions = {
    readonly pageBorders?: IPageBorderAttributes;
    readonly pageBorderTop?: IBorderOptions;
    readonly pageBorderRight?: IBorderOptions;
    readonly pageBorderBottom?: IBorderOptions;
    readonly pageBorderLeft?: IBorderOptions;
};

export declare type IPageMarginAttributes = {
    readonly top?: number | UniversalMeasure;
    readonly right?: number | PositiveUniversalMeasure;
    readonly bottom?: number | UniversalMeasure;
    readonly left?: number | PositiveUniversalMeasure;
    readonly header?: number | PositiveUniversalMeasure;
    readonly footer?: number | PositiveUniversalMeasure;
    readonly gutter?: number | PositiveUniversalMeasure;
};

export declare type IPageNumberTypeAttributes = {
    readonly start?: number;
    readonly formatType?: (typeof NumberFormat)[keyof typeof NumberFormat];
    readonly separator?: (typeof PageNumberSeparator)[keyof typeof PageNumberSeparator];
};

export declare type IPageReferenceOptions = {
    readonly hyperlink?: boolean;
    readonly useRelativePosition?: boolean;
};

export declare type IPageSizeAttributes = {
    readonly width?: number | PositiveUniversalMeasure;
    readonly height?: number | PositiveUniversalMeasure;
    readonly orientation?: (typeof PageOrientation)[keyof typeof PageOrientation];
};

export declare type IParagraphOptions = {
    readonly text?: string;
    readonly children?: readonly ParagraphChild[];
} & IParagraphPropertiesOptions;

export declare type IParagraphPropertiesOptions = {
    readonly heading?: (typeof HeadingLevel)[keyof typeof HeadingLevel];
    readonly bidirectional?: boolean;
    readonly pageBreakBefore?: boolean;
    readonly tabStops?: readonly TabStopDefinition[];
    readonly style?: string;
    readonly bullet?: {
        readonly level: number;
    };
    readonly widowControl?: boolean;
    readonly frame?: IFrameOptions;
    readonly suppressLineNumbers?: boolean;
    readonly wordWrap?: boolean;
    readonly overflowPunctuation?: boolean;
    readonly scale?: number;
    readonly autoSpaceEastAsianText?: boolean;
    readonly run?: IRunOptions;
} & IParagraphStylePropertiesOptions;

export declare type IParagraphStyleOptions = {
    readonly id: string;
} & IBaseParagraphStyleOptions;

export declare type IParagraphStylePropertiesOptions = {
    readonly border?: IBordersOptions;
    readonly shading?: IShadingAttributesProperties;
    readonly numbering?: {
        readonly reference: string;
        readonly level: number;
        readonly instance?: number;
        readonly custom?: boolean;
    } | false;
} & ILevelParagraphStylePropertiesOptions;

export declare type IPatch = ParagraphPatch | FilePatch;

declare type IPropertiesOptions = {
    readonly sections: readonly ISectionOptions[];
    readonly title?: string;
    readonly subject?: string;
    readonly creator?: string;
    readonly keywords?: string;
    readonly description?: string;
    readonly lastModifiedBy?: string;
    readonly revision?: number;
    readonly externalStyles?: string;
    readonly styles?: IStylesOptions;
    readonly numbering?: INumberingOptions;
    readonly comments?: ICommentsOptions;
    readonly footnotes?: Readonly<Record<string, {
        readonly children: readonly Paragraph[];
    }>>;
    readonly background?: IDocumentBackgroundOptions;
    readonly features?: {
        readonly trackRevisions?: boolean;
        readonly updateFields?: boolean;
    };
    readonly compatabilityModeVersion?: number;
    readonly compatibility?: ICompatibilityOptions;
    readonly customProperties?: readonly ICustomPropertyOptions[];
    readonly evenAndOddHeaderAndFooters?: boolean;
    readonly defaultTabStop?: number;
    readonly fonts?: readonly FontOptions[];
    readonly hyphenation?: IHyphenationOptions;
};

export declare type IRunOptions = {
    readonly children?: readonly (Begin | FieldInstruction | Separate | End | (typeof PageNumber)[keyof typeof PageNumber] | FootnoteReferenceRun | Break | AnnotationReference | CarriageReturn | ContinuationSeparator | DayLong | DayShort | EndnoteReference | FootnoteReferenceElement | LastRenderedPageBreak | MonthLong | MonthShort | NoBreakHyphen | PageNumberElement | Separator | SoftHyphen | Tab | YearLong | YearShort | PositionalTab | string)[];
    readonly break?: number;
    readonly text?: string;
} & IRunPropertiesOptions;

export declare type IRunPropertiesChangeOptions = {} & IRunPropertiesOptions & IChangedAttributesProperties;

export declare type IRunPropertiesOptions = {
    readonly style?: string;
} & IRunStylePropertiesOptions;

export declare type IRunStylePropertiesOptions = {
    readonly noProof?: boolean;
    readonly bold?: boolean;
    readonly boldComplexScript?: boolean;
    readonly italics?: boolean;
    readonly italicsComplexScript?: boolean;
    readonly underline?: {
        readonly color?: string;
        readonly type?: (typeof UnderlineType)[keyof typeof UnderlineType];
    };
    readonly effect?: (typeof TextEffect)[keyof typeof TextEffect];
    readonly emphasisMark?: {
        readonly type?: (typeof EmphasisMarkType)[keyof typeof EmphasisMarkType];
    };
    readonly color?: string;
    readonly kern?: number | PositiveUniversalMeasure;
    readonly position?: UniversalMeasure;
    readonly size?: number | PositiveUniversalMeasure;
    readonly sizeComplexScript?: boolean | number | PositiveUniversalMeasure;
    readonly rightToLeft?: boolean;
    readonly smallCaps?: boolean;
    readonly allCaps?: boolean;
    readonly strike?: boolean;
    readonly doubleStrike?: boolean;
    readonly subScript?: boolean;
    readonly superScript?: boolean;
    readonly font?: string | IFontOptions | IFontAttributesProperties;
    readonly highlight?: (typeof HighlightColor)[keyof typeof HighlightColor];
    readonly highlightComplexScript?: boolean | string;
    readonly characterSpacing?: number;
    readonly shading?: IShadingAttributesProperties;
    readonly emboss?: boolean;
    readonly imprint?: boolean;
    readonly revision?: IRunPropertiesChangeOptions;
    readonly language?: ILanguageOptions;
    readonly border?: IBorderOptions;
    readonly snapToGrid?: boolean;
    readonly vanish?: boolean;
    readonly specVanish?: boolean;
    readonly scale?: number;
    readonly math?: boolean;
};

export declare type ISectionOptions = {
    readonly headers?: {
        readonly default?: Header;
        readonly first?: Header;
        readonly even?: Header;
    };
    readonly footers?: {
        readonly default?: Footer;
        readonly first?: Footer;
        readonly even?: Footer;
    };
    readonly properties?: ISectionPropertiesOptions;
    readonly children: readonly FileChild[];
};

export declare type ISectionPropertiesOptions = {
    readonly page?: {
        readonly size?: IPageSizeAttributes;
        readonly margin?: IPageMarginAttributes;
        readonly pageNumbers?: IPageNumberTypeAttributes;
        readonly borders?: IPageBordersOptions;
        readonly textDirection?: (typeof PageTextDirectionType)[keyof typeof PageTextDirectionType];
    };
    readonly grid?: IDocGridAttributesProperties;
    readonly headerWrapperGroup?: IHeaderFooterGroup<HeaderWrapper>;
    readonly footerWrapperGroup?: IHeaderFooterGroup<FooterWrapper>;
    readonly lineNumbers?: ILineNumberAttributes;
    readonly titlePage?: boolean;
    readonly verticalAlign?: (typeof VerticalAlign)[keyof typeof VerticalAlign];
    readonly column?: IColumnsAttributes;
    readonly type?: (typeof SectionType)[keyof typeof SectionType];
};

declare type ISettingsOptions = {
    readonly compatibilityModeVersion?: number;
    readonly evenAndOddHeaders?: boolean;
    readonly trackRevisions?: boolean;
    readonly updateFields?: boolean;
    readonly compatibility?: ICompatibilityOptions;
    readonly defaultTabStop?: number;
    readonly hyphenation?: IHyphenationOptions;
};

export declare type IShadingAttributesProperties = {
    readonly fill?: string;
    readonly color?: string;
    readonly type?: (typeof ShadingType)[keyof typeof ShadingType];
};

export declare type ISpacingProperties = {
    readonly after?: number;
    readonly before?: number;
    readonly line?: number;
    readonly lineRule?: (typeof LineRuleType)[keyof typeof LineRuleType];
    readonly beforeAutoSpacing?: boolean;
    readonly afterAutoSpacing?: boolean;
};

declare type IStyleAttributes = {
    readonly type?: string;
    readonly styleId?: string;
    readonly default?: boolean;
    readonly customStyle?: string;
};

declare type IStyleOptions = {
    readonly name?: string;
    readonly basedOn?: string;
    readonly next?: string;
    readonly link?: string;
    readonly uiPriority?: number;
    readonly semiHidden?: boolean;
    readonly unhideWhenUsed?: boolean;
    readonly quickFormat?: boolean;
};

export declare type IStylesOptions = {
    readonly default?: IDefaultStylesOptions;
    readonly initialStyles?: BaseXmlComponent;
    readonly paragraphStyles?: readonly IParagraphStyleOptions[];
    readonly characterStyles?: readonly ICharacterStyleOptions[];
    readonly importedStyles?: readonly (XmlComponent | StyleForParagraph | StyleForCharacter | ImportedXmlComponent)[];
};

export declare type ISymbolRunOptions = {
    readonly char: string;
    readonly symbolfont?: string;
} & IRunOptions;

export declare type ITableBordersOptions = {
    readonly top?: IBorderOptions;
    readonly bottom?: IBorderOptions;
    readonly left?: IBorderOptions;
    readonly right?: IBorderOptions;
    readonly insideHorizontal?: IBorderOptions;
    readonly insideVertical?: IBorderOptions;
};

export declare type ITableCellBorders = {
    readonly top?: IBorderOptions;
    readonly start?: IBorderOptions;
    readonly left?: IBorderOptions;
    readonly bottom?: IBorderOptions;
    readonly end?: IBorderOptions;
    readonly right?: IBorderOptions;
};

declare type ITableCellMarginOptions = {
    readonly marginUnitType?: (typeof WidthType)[keyof typeof WidthType];
    readonly top?: number;
    readonly bottom?: number;
    readonly left?: number;
    readonly right?: number;
};

export declare type ITableCellOptions = {
    readonly children: readonly (Paragraph | Table)[];
} & ITableCellPropertiesOptions;

declare type ITableCellPropertiesOptions = {
    readonly shading?: IShadingAttributesProperties;
    readonly margins?: ITableCellMarginOptions;
    readonly verticalAlign?: (typeof VerticalAlign)[keyof typeof VerticalAlign];
    readonly textDirection?: (typeof TextDirection)[keyof typeof TextDirection];
    readonly verticalMerge?: (typeof VerticalMergeType)[keyof typeof VerticalMergeType];
    readonly width?: ITableWidthProperties;
    readonly columnSpan?: number;
    readonly rowSpan?: number;
    readonly borders?: ITableCellBorders;
};

export declare type ITableFloatOptions = {
    readonly horizontalAnchor?: (typeof TableAnchorType)[keyof typeof TableAnchorType];
    readonly absoluteHorizontalPosition?: number | UniversalMeasure;
    readonly relativeHorizontalPosition?: (typeof RelativeHorizontalPosition)[keyof typeof RelativeHorizontalPosition];
    readonly verticalAnchor?: (typeof TableAnchorType)[keyof typeof TableAnchorType];
    readonly absoluteVerticalPosition?: number | UniversalMeasure;
    readonly relativeVerticalPosition?: (typeof RelativeVerticalPosition)[keyof typeof RelativeVerticalPosition];
    readonly bottomFromText?: number | PositiveUniversalMeasure;
    readonly topFromText?: number | PositiveUniversalMeasure;
    readonly leftFromText?: number | PositiveUniversalMeasure;
    readonly rightFromText?: number | PositiveUniversalMeasure;
    readonly overlap?: (typeof OverlapType)[keyof typeof OverlapType];
};

export declare type ITableOfContentsOptions = {
    readonly captionLabel?: string;
    readonly entriesFromBookmark?: string;
    readonly captionLabelIncludingNumbers?: string;
    readonly sequenceAndPageNumbersSeparator?: string;
    readonly tcFieldIdentifier?: string;
    readonly hyperlink?: boolean;
    readonly tcFieldLevelRange?: string;
    readonly pageNumbersEntryLevelsRange?: string;
    readonly headingStyleRange?: string;
    readonly entryAndPageNumberSeparator?: string;
    readonly seqFieldIdentifierForPrefix?: string;
    readonly stylesWithLevels?: readonly StyleLevel[];
    readonly useAppliedParagraphOutlineLevel?: boolean;
    readonly preserveTabInEntries?: boolean;
    readonly preserveNewLineInEntries?: boolean;
    readonly hideTabAndPageNumbersInWebView?: boolean;
};

export declare type ITableOptions = {
    readonly rows: readonly TableRow[];
    readonly width?: ITableWidthProperties;
    readonly columnWidths?: readonly number[];
    readonly margins?: ITableCellMarginOptions;
    readonly indent?: ITableWidthProperties;
    readonly float?: ITableFloatOptions;
    readonly layout?: (typeof TableLayoutType)[keyof typeof TableLayoutType];
    readonly style?: string;
    readonly borders?: ITableBordersOptions;
    readonly alignment?: (typeof AlignmentType)[keyof typeof AlignmentType];
    readonly visuallyRightToLeft?: boolean;
};

export declare type ITablePropertiesOptions = {
    readonly width?: ITableWidthProperties;
    readonly indent?: ITableWidthProperties;
    readonly layout?: (typeof TableLayoutType)[keyof typeof TableLayoutType];
    readonly borders?: ITableBordersOptions;
    readonly float?: ITableFloatOptions;
    readonly shading?: IShadingAttributesProperties;
    readonly style?: string;
    readonly alignment?: (typeof AlignmentType)[keyof typeof AlignmentType];
    readonly cellMargin?: ITableCellMarginOptions;
    readonly visuallyRightToLeft?: boolean;
};

export declare type ITableRowOptions = {
    readonly children: readonly TableCell[];
} & ITableRowPropertiesOptions;

export declare type ITableRowPropertiesOptions = {
    readonly cantSplit?: boolean;
    readonly tableHeader?: boolean;
    readonly height?: {
        readonly value: number | PositiveUniversalMeasure;
        readonly rule: (typeof HeightRule)[keyof typeof HeightRule];
    };
};

export declare type ITableWidthProperties = {
    readonly size: number | Percentage | UniversalMeasure;
    readonly type?: (typeof WidthType)[keyof typeof WidthType];
};

declare type ITextboxOptions = Omit<IParagraphOptions, "style"> & {
    readonly style?: VmlShapeStyle;
};

export declare type ITextWrapping = {
    readonly type: (typeof TextWrappingType)[keyof typeof TextWrappingType];
    readonly side?: (typeof TextWrappingSide)[keyof typeof TextWrappingSide];
    readonly margins?: IDistance;
};

export declare type IVerticalPositionOptions = {
    readonly relative?: (typeof VerticalPositionRelativeFrom)[keyof typeof VerticalPositionRelativeFrom];
    readonly align?: (typeof VerticalPositionAlign)[keyof typeof VerticalPositionAlign];
    readonly offset?: number;
};

declare type IViewWrapper = {
    readonly View: Document_2 | Footer_2 | Header_2 | FootNotes | XmlComponent;
    readonly Relationships: Relationships;
};

export declare interface IXmlableObject extends Record<string, unknown> {
    readonly [key: string]: any;
}

export declare type IXmlAttribute = Readonly<Record<string, string | number | boolean>>;

declare type IXmlifyedFile = {
    readonly data: string;
    readonly path: string;
};

export declare type IXYFrameOptions = {
    readonly type: "absolute";
    readonly position: {
        readonly x: number;
        readonly y: number;
    };
} & IBaseFrameOptions;

export declare class LastRenderedPageBreak extends EmptyElement {
    constructor();
}

export declare const LeaderType: {
    readonly DOT: "dot";
    readonly HYPHEN: "hyphen";
    readonly MIDDLE_DOT: "middleDot";
    readonly NONE: "none";
    readonly UNDERSCORE: "underscore";
};

declare type LengthUnit = "auto" | number | Percentage | UniversalMeasure | RelativeMeasure;

export declare class Level extends LevelBase {
}

export declare class LevelBase extends XmlComponent {
    private readonly paragraphProperties;
    private readonly runProperties;
    constructor({ level, format, text, alignment, start, style, suffix, isLegalNumberingStyle, }: ILevelsOptions);
}

export declare const LevelFormat: {
    readonly DECIMAL: "decimal";
    readonly UPPER_ROMAN: "upperRoman";
    readonly LOWER_ROMAN: "lowerRoman";
    readonly UPPER_LETTER: "upperLetter";
    readonly LOWER_LETTER: "lowerLetter";
    readonly ORDINAL: "ordinal";
    readonly CARDINAL_TEXT: "cardinalText";
    readonly ORDINAL_TEXT: "ordinalText";
    readonly HEX: "hex";
    readonly CHICAGO: "chicago";
    readonly IDEOGRAPH__DIGITAL: "ideographDigital";
    readonly JAPANESE_COUNTING: "japaneseCounting";
    readonly AIUEO: "aiueo";
    readonly IROHA: "iroha";
    readonly DECIMAL_FULL_WIDTH: "decimalFullWidth";
    readonly DECIMAL_HALF_WIDTH: "decimalHalfWidth";
    readonly JAPANESE_LEGAL: "japaneseLegal";
    readonly JAPANESE_DIGITAL_TEN_THOUSAND: "japaneseDigitalTenThousand";
    readonly DECIMAL_ENCLOSED_CIRCLE: "decimalEnclosedCircle";
    readonly DECIMAL_FULL_WIDTH2: "decimalFullWidth2";
    readonly AIUEO_FULL_WIDTH: "aiueoFullWidth";
    readonly IROHA_FULL_WIDTH: "irohaFullWidth";
    readonly DECIMAL_ZERO: "decimalZero";
    readonly BULLET: "bullet";
    readonly GANADA: "ganada";
    readonly CHOSUNG: "chosung";
    readonly DECIMAL_ENCLOSED_FULLSTOP: "decimalEnclosedFullstop";
    readonly DECIMAL_ENCLOSED_PARENTHESES: "decimalEnclosedParen";
    readonly DECIMAL_ENCLOSED_CIRCLE_CHINESE: "decimalEnclosedCircleChinese";
    readonly IDEOGRAPH_ENCLOSED_CIRCLE: "ideographEnclosedCircle";
    readonly IDEOGRAPH_TRADITIONAL: "ideographTraditional";
    readonly IDEOGRAPH_ZODIAC: "ideographZodiac";
    readonly IDEOGRAPH_ZODIAC_TRADITIONAL: "ideographZodiacTraditional";
    readonly TAIWANESE_COUNTING: "taiwaneseCounting";
    readonly IDEOGRAPH_LEGAL_TRADITIONAL: "ideographLegalTraditional";
    readonly TAIWANESE_COUNTING_THOUSAND: "taiwaneseCountingThousand";
    readonly TAIWANESE_DIGITAL: "taiwaneseDigital";
    readonly CHINESE_COUNTING: "chineseCounting";
    readonly CHINESE_LEGAL_SIMPLIFIED: "chineseLegalSimplified";
    readonly CHINESE_COUNTING_THOUSAND: "chineseCountingThousand";
    readonly KOREAN_DIGITAL: "koreanDigital";
    readonly KOREAN_COUNTING: "koreanCounting";
    readonly KOREAN_LEGAL: "koreanLegal";
    readonly KOREAN_DIGITAL2: "koreanDigital2";
    readonly VIETNAMESE_COUNTING: "vietnameseCounting";
    readonly RUSSIAN_LOWER: "russianLower";
    readonly RUSSIAN_UPPER: "russianUpper";
    readonly NONE: "none";
    readonly NUMBER_IN_DASH: "numberInDash";
    readonly HEBREW1: "hebrew1";
    readonly HEBREW2: "hebrew2";
    readonly ARABIC_ALPHA: "arabicAlpha";
    readonly ARABIC_ABJAD: "arabicAbjad";
    readonly HINDI_VOWELS: "hindiVowels";
    readonly HINDI_CONSONANTS: "hindiConsonants";
    readonly HINDI_NUMBERS: "hindiNumbers";
    readonly HINDI_COUNTING: "hindiCounting";
    readonly THAI_LETTERS: "thaiLetters";
    readonly THAI_NUMBERS: "thaiNumbers";
    readonly THAI_COUNTING: "thaiCounting";
    readonly BAHT_TEXT: "bahtText";
    readonly DOLLAR_TEXT: "dollarText";
    readonly CUSTOM: "custom";
};

export declare class LevelForOverride extends LevelBase {
}

export declare class LevelOverride extends XmlComponent {
    constructor(levelNum: number, start?: number);
}

export declare const LevelSuffix: {
    readonly NOTHING: "nothing";
    readonly SPACE: "space";
    readonly TAB: "tab";
};

declare const LineCap: {
    readonly ROUND: "rnd";
    readonly SQUARE: "sq";
    readonly FLAT: "flat";
};

export declare const LineNumberRestartFormat: {
    readonly NEW_PAGE: "newPage";
    readonly NEW_SECTION: "newSection";
    readonly CONTINUOUS: "continuous";
};

export declare const LineRuleType: {
    readonly AT_LEAST: "atLeast";
    readonly EXACTLY: "exactly";
    readonly EXACT: "exact";
    readonly AUTO: "auto";
};

export declare const longHexNumber: (val: string) => string;

declare class Math_2 extends XmlComponent {
    constructor(options: IMathOptions);
}
export { Math_2 as Math }

export declare class MathAccentCharacter extends XmlComponent {
    constructor(accent: string);
}

export declare class MathAngledBrackets extends XmlComponent {
    constructor(options: {
        readonly children: readonly MathComponent[];
    });
}

export declare class MathBase extends XmlComponent {
    constructor(children: readonly MathComponent[]);
}

export declare type MathComponent = MathRun | MathFraction | MathSum | MathIntegral | MathSuperScript | MathSubScript | MathSubSuperScript | MathRadical | MathFunction | MathRoundBrackets | MathCurlyBrackets | MathAngledBrackets | MathSquareBrackets;

export declare class MathCurlyBrackets extends XmlComponent {
    constructor(options: {
        readonly children: readonly MathComponent[];
    });
}

export declare class MathDegree extends XmlComponent {
    constructor(children?: readonly MathComponent[]);
}

export declare class MathDenominator extends XmlComponent {
    constructor(children: readonly MathComponent[]);
}

export declare class MathFraction extends XmlComponent {
    constructor(options: IMathFractionOptions);
}

export declare class MathFunction extends XmlComponent {
    constructor(options: IMathFunctionOptions);
}

export declare class MathFunctionName extends XmlComponent {
    constructor(children: readonly MathComponent[]);
}

export declare class MathFunctionProperties extends XmlComponent {
    constructor();
}

export declare class MathIntegral extends XmlComponent {
    constructor(options: IMathIntegralOptions);
}

export declare class MathLimit extends XmlComponent {
    constructor(children: readonly MathComponent[]);
}

export declare class MathLimitLocation extends XmlComponent {
    constructor(value?: string);
}

export declare class MathLimitLower extends XmlComponent {
    constructor(options: IMathLimitLowerOptions);
}

export declare class MathLimitUpper extends XmlComponent {
    constructor(options: IMathLimitUpperOptions);
}

export declare class MathNAryProperties extends XmlComponent {
    constructor(accent: string, hasSuperScript: boolean, hasSubScript: boolean, limitLocationVal?: string);
}

export declare class MathNumerator extends XmlComponent {
    constructor(children: readonly MathComponent[]);
}

export declare class MathPreSubSuperScript extends XmlComponent {
    constructor(options: IMathPreSubSuperScriptOptions);
}

export declare class MathPreSubSuperScriptProperties extends XmlComponent {
    constructor();
}

export declare class MathRadical extends XmlComponent {
    constructor(options: IMathRadicalOptions);
}

export declare class MathRadicalProperties extends XmlComponent {
    constructor(hasDegree: boolean);
}

export declare class MathRoundBrackets extends XmlComponent {
    constructor(options: {
        readonly children: readonly MathComponent[];
    });
}

export declare class MathRun extends XmlComponent {
    constructor(text: string);
}

export declare class MathSquareBrackets extends XmlComponent {
    constructor(options: {
        readonly children: readonly MathComponent[];
    });
}

export declare class MathSubScript extends XmlComponent {
    constructor(options: IMathSubScriptOptions);
}

export declare class MathSubScriptElement extends XmlComponent {
    constructor(children: readonly MathComponent[]);
}

export declare class MathSubScriptProperties extends XmlComponent {
    constructor();
}

export declare class MathSubSuperScript extends XmlComponent {
    constructor(options: IMathSubSuperScriptOptions);
}

export declare class MathSubSuperScriptProperties extends XmlComponent {
    constructor();
}

export declare class MathSum extends XmlComponent {
    constructor(options: IMathSumOptions);
}

export declare class MathSuperScript extends XmlComponent {
    constructor(options: IMathSuperScriptOptions);
}

export declare class MathSuperScriptElement extends XmlComponent {
    constructor(children: readonly MathComponent[]);
}

export declare class MathSuperScriptProperties extends XmlComponent {
    constructor();
}

export declare const measurementOrPercentValue: (val: number | Percentage | UniversalMeasure) => number | UniversalMeasure | Percentage;

export declare class Media {
    private readonly map;
    constructor();
    addImage(key: string, mediaData: IMediaData): void;
    get Array(): readonly IMediaData[];
}

export declare class MonthLong extends EmptyElement {
    constructor();
}

export declare class MonthShort extends EmptyElement {
    constructor();
}

export declare class NextAttributeComponent<T extends AttributeData> extends BaseXmlComponent {
    private readonly root;
    constructor(root: AttributePayload<T>);
    prepForXml(_: IContext): IXmlableObject;
}

export declare class NoBreakHyphen extends EmptyElement {
    constructor();
}

export declare const NumberFormat: {
    readonly DECIMAL: "decimal";
    readonly UPPER_ROMAN: "upperRoman";
    readonly LOWER_ROMAN: "lowerRoman";
    readonly UPPER_LETTER: "upperLetter";
    readonly LOWER_LETTER: "lowerLetter";
    readonly ORDINAL: "ordinal";
    readonly CARDINAL_TEXT: "cardinalText";
    readonly ORDINAL_TEXT: "ordinalText";
    readonly HEX: "hex";
    readonly CHICAGO: "chicago";
    readonly IDEOGRAPH_DIGITAL: "ideographDigital";
    readonly JAPANESE_COUNTING: "japaneseCounting";
    readonly AIUEO: "aiueo";
    readonly IROHA: "iroha";
    readonly DECIMAL_FULL_WIDTH: "decimalFullWidth";
    readonly DECIMAL_HALF_WIDTH: "decimalHalfWidth";
    readonly JAPANESE_LEGAL: "japaneseLegal";
    readonly JAPANESE_DIGITAL_TEN_THOUSAND: "japaneseDigitalTenThousand";
    readonly DECIMAL_ENCLOSED_CIRCLE: "decimalEnclosedCircle";
    readonly DECIMAL_FULL_WIDTH_2: "decimalFullWidth2";
    readonly AIUEO_FULL_WIDTH: "aiueoFullWidth";
    readonly IROHA_FULL_WIDTH: "irohaFullWidth";
    readonly DECIMAL_ZERO: "decimalZero";
    readonly BULLET: "bullet";
    readonly GANADA: "ganada";
    readonly CHOSUNG: "chosung";
    readonly DECIMAL_ENCLOSED_FULL_STOP: "decimalEnclosedFullstop";
    readonly DECIMAL_ENCLOSED_PAREN: "decimalEnclosedParen";
    readonly DECIMAL_ENCLOSED_CIRCLE_CHINESE: "decimalEnclosedCircleChinese";
    readonly IDEOGRAPH_ENCLOSED_CIRCLE: "ideographEnclosedCircle";
    readonly IDEOGRAPH_TRADITIONAL: "ideographTraditional";
    readonly IDEOGRAPH_ZODIAC: "ideographZodiac";
    readonly IDEOGRAPH_ZODIAC_TRADITIONAL: "ideographZodiacTraditional";
    readonly TAIWANESE_COUNTING: "taiwaneseCounting";
    readonly IDEOGRAPH_LEGAL_TRADITIONAL: "ideographLegalTraditional";
    readonly TAIWANESE_COUNTING_THOUSAND: "taiwaneseCountingThousand";
    readonly TAIWANESE_DIGITAL: "taiwaneseDigital";
    readonly CHINESE_COUNTING: "chineseCounting";
    readonly CHINESE_LEGAL_SIMPLIFIED: "chineseLegalSimplified";
    readonly CHINESE_COUNTING_TEN_THOUSAND: "chineseCountingThousand";
    readonly KOREAN_DIGITAL: "koreanDigital";
    readonly KOREAN_COUNTING: "koreanCounting";
    readonly KOREAN_LEGAL: "koreanLegal";
    readonly KOREAN_DIGITAL_2: "koreanDigital2";
    readonly VIETNAMESE_COUNTING: "vietnameseCounting";
    readonly RUSSIAN_LOWER: "russianLower";
    readonly RUSSIAN_UPPER: "russianUpper";
    readonly NONE: "none";
    readonly NUMBER_IN_DASH: "numberInDash";
    readonly HEBREW_1: "hebrew1";
    readonly HEBREW_2: "hebrew2";
    readonly ARABIC_ALPHA: "arabicAlpha";
    readonly ARABIC_ABJAD: "arabicAbjad";
    readonly HINDI_VOWELS: "hindiVowels";
    readonly HINDI_CONSONANTS: "hindiConsonants";
    readonly HINDI_NUMBERS: "hindiNumbers";
    readonly HINDI_COUNTING: "hindiCounting";
    readonly THAI_LETTERS: "thaiLetters";
    readonly THAI_NUMBERS: "thaiNumbers";
    readonly THAI_COUNTING: "thaiCounting";
    readonly BAHT_TEXT: "bahtText";
    readonly DOLLAR_TEXT: "dollarText";
};

export declare class Numbering extends XmlComponent {
    private readonly abstractNumberingMap;
    private readonly concreteNumberingMap;
    private readonly referenceConfigMap;
    private readonly abstractNumUniqueNumericId;
    private readonly concreteNumUniqueNumericId;
    constructor(options: INumberingOptions);
    prepForXml(context: IContext): IXmlableObject | undefined;
    createConcreteNumberingInstance(reference: string, instance: number): void;
    get ConcreteNumbering(): readonly ConcreteNumbering[];
    get ReferenceConfig(): readonly Record<string, any>[];
}

export declare class NumberProperties extends XmlComponent {
    constructor(numberId: number | string, indentLevel: number);
}

export declare class NumberValueElement extends XmlComponent {
    constructor(name: string, val: number);
}

export declare class OnOffElement extends XmlComponent {
    constructor(name: string, val?: boolean | undefined);
}

declare type OutlineAttributes = {
    readonly width?: number;
    readonly cap?: keyof typeof LineCap;
    readonly compoundLine?: keyof typeof CompoundLine;
    readonly align?: keyof typeof PenAlignment;
};

declare type OutlineFillProperties = OutlineNoFill | OutlineSolidFill;

export declare class OutlineLevel extends XmlComponent {
    readonly level: number;
    constructor(level: number);
}

declare type OutlineNoFill = {
    readonly type: "noFill";
};

declare type OutlineOptions = OutlineAttributes & OutlineFillProperties;

declare type OutlineRgbSolidFill = {
    readonly type: "solidFill";
    readonly solidFillType: "rgb";
    readonly value: string;
};

declare type OutlineSchemeSolidFill = {
    readonly type: "solidFill";
    readonly solidFillType: "scheme";
    readonly value: (typeof SchemeColor)[keyof typeof SchemeColor];
};

declare type OutlineSolidFill = OutlineRgbSolidFill | OutlineSchemeSolidFill;

declare type OutputByType = {
    readonly base64: string;
    readonly string: string;
    readonly text: string;
    readonly binarystring: string;
    readonly array: readonly number[];
    readonly uint8array: Uint8Array;
    readonly arraybuffer: ArrayBuffer;
    readonly blob: Blob;
    readonly nodebuffer: Buffer;
};

declare type OutputType = keyof OutputByType;

export declare const OverlapType: {
    readonly NEVER: "never";
    readonly OVERLAP: "overlap";
};

export declare class Packer {
    static pack<T extends OutputType>(file: File_2, type: T, prettify?: boolean | (typeof PrettifyType)[keyof typeof PrettifyType], overrides?: readonly IXmlifyedFile[]): Promise<OutputByType[T]>;
    static toString(file: File_2, prettify?: boolean | (typeof PrettifyType)[keyof typeof PrettifyType], overrides?: readonly IXmlifyedFile[]): Promise<string>;
    static toBuffer(file: File_2, prettify?: boolean | (typeof PrettifyType)[keyof typeof PrettifyType], overrides?: readonly IXmlifyedFile[]): Promise<Buffer>;
    static toBase64String(file: File_2, prettify?: boolean | (typeof PrettifyType)[keyof typeof PrettifyType], overrides?: readonly IXmlifyedFile[]): Promise<string>;
    static toBlob(file: File_2, prettify?: boolean | (typeof PrettifyType)[keyof typeof PrettifyType], overrides?: readonly IXmlifyedFile[]): Promise<Blob>;
    static toArrayBuffer(file: File_2, prettify?: boolean | (typeof PrettifyType)[keyof typeof PrettifyType], overrides?: readonly IXmlifyedFile[]): Promise<ArrayBuffer>;
    static toStream(file: File_2, prettify?: boolean | (typeof PrettifyType)[keyof typeof PrettifyType], overrides?: readonly IXmlifyedFile[]): Stream;
    private static readonly compiler;
}

export declare const PageBorderDisplay: {
    readonly ALL_PAGES: "allPages";
    readonly FIRST_PAGE: "firstPage";
    readonly NOT_FIRST_PAGE: "notFirstPage";
};

export declare const PageBorderOffsetFrom: {
    readonly PAGE: "page";
    readonly TEXT: "text";
};

export declare class PageBorders extends IgnoreIfEmptyXmlComponent {
    constructor(options?: IPageBordersOptions);
}

export declare const PageBorderZOrder: {
    readonly BACK: "back";
    readonly FRONT: "front";
};

export declare class PageBreak extends Run {
    constructor();
}

export declare class PageBreakBefore extends XmlComponent {
    constructor();
}

export declare class PageMargin extends XmlComponent {
    constructor(top: number | UniversalMeasure, right: number | PositiveUniversalMeasure, bottom: number | UniversalMeasure, left: number | PositiveUniversalMeasure, header: number | PositiveUniversalMeasure, footer: number | PositiveUniversalMeasure, gutter: number | PositiveUniversalMeasure);
}

export declare const PageNumber: {
    readonly CURRENT: "CURRENT";
    readonly TOTAL_PAGES: "TOTAL_PAGES";
    readonly TOTAL_PAGES_IN_SECTION: "TOTAL_PAGES_IN_SECTION";
    readonly CURRENT_SECTION: "SECTION";
};

export declare class PageNumberElement extends EmptyElement {
    constructor();
}

export declare const PageNumberSeparator: {
    readonly HYPHEN: "hyphen";
    readonly PERIOD: "period";
    readonly COLON: "colon";
    readonly EM_DASH: "emDash";
    readonly EN_DASH: "endash";
};

export declare class PageNumberType extends XmlComponent {
    constructor({ start, formatType, separator }: IPageNumberTypeAttributes);
}

export declare class PageNumberTypeAttributes extends XmlAttributeComponent<IPageNumberTypeAttributes> {
    protected readonly xmlKeys: {
        start: string;
        formatType: string;
        separator: string;
    };
}

export declare const PageOrientation: {
    readonly PORTRAIT: "portrait";
    readonly LANDSCAPE: "landscape";
};

export declare class PageReference extends Run {
    constructor(bookmarkId: string, options?: IPageReferenceOptions);
}

export declare class PageSize extends XmlComponent {
    constructor(width: number | PositiveUniversalMeasure, height: number | PositiveUniversalMeasure, orientation: (typeof PageOrientation)[keyof typeof PageOrientation]);
}

export declare class PageTextDirection extends XmlComponent {
    constructor(value: (typeof PageTextDirectionType)[keyof typeof PageTextDirectionType]);
}

export declare const PageTextDirectionType: {
    readonly LEFT_TO_RIGHT_TOP_TO_BOTTOM: "lrTb";
    readonly TOP_TO_BOTTOM_RIGHT_TO_LEFT: "tbRl";
};

export declare class Paragraph extends FileChild {
    private readonly properties;
    constructor(options: string | IParagraphOptions);
    prepForXml(context: IContext): IXmlableObject | undefined;
    addRunToFront(run: Run): Paragraph;
}

export declare type ParagraphChild = TextRun | ImageRun | SymbolRun | Bookmark | PageBreak | ColumnBreak | SequentialIdentifier | FootnoteReferenceRun | InternalHyperlink | ExternalHyperlink | InsertedTextRun | DeletedTextRun | Math_2 | SimpleField | SimpleMailMergeField | Comments | Comment_2 | CommentRangeStart | CommentRangeEnd | CommentReference | CheckBox;

declare type ParagraphPatch = {
    readonly type: typeof PatchType.PARAGRAPH;
    readonly children: readonly ParagraphChild[];
};

export declare class ParagraphProperties extends IgnoreIfEmptyXmlComponent {
    private readonly numberingReferences;
    constructor(options?: IParagraphPropertiesOptions);
    push(item: XmlComponent): void;
    prepForXml(context: IContext): IXmlableObject | undefined;
}

export declare class ParagraphPropertiesDefaults extends XmlComponent {
    constructor(options?: IParagraphStylePropertiesOptions);
}

export declare const patchDetector: ({ data }: PatchDetectorOptions) => Promise<readonly string[]>;

declare type PatchDetectorOptions = {
    readonly data: InputDataType;
};

export declare const patchDocument: <T extends keyof OutputByType = keyof OutputByType>({ outputType, data, patches, keepOriginalStyles, pattern }: PatchDocumentOptions<T>) => Promise<OutputByType[T]>;

export declare type PatchDocumentOptions<T extends PatchDocumentOutputType = PatchDocumentOutputType> = {
    readonly outputType: T;
    readonly data: InputDataType;
    readonly patches: Readonly<Record<string, IPatch>>;
    readonly keepOriginalStyles?: boolean;
    readonly pattern?: PatchDocumentPatternOption;
};

export declare type PatchDocumentOutputType = OutputType;

export declare type PatchDocumentPatternOption = {
    readonly start: string;
    readonly end: string;
};

export declare const PatchType: {
    readonly DOCUMENT: "file";
    readonly PARAGRAPH: "paragraph";
};

declare const PenAlignment: {
    readonly CENTER: "ctr";
    readonly INSET: "in";
};

export declare type Percentage = `${"-" | ""}${number}%`;

export declare const percentageValue: (val: Percentage) => Percentage;

export declare const pointMeasureValue: (val: number) => number;

export declare class PositionalTab extends XmlComponent {
    constructor(options: PositionalTabOptions);
}

export declare const PositionalTabAlignment: {
    readonly LEFT: "left";
    readonly CENTER: "center";
    readonly RIGHT: "right";
};

export declare const PositionalTabLeader: {
    readonly NONE: "none";
    readonly DOT: "dot";
    readonly HYPHEN: "hyphen";
    readonly UNDERSCORE: "underscore";
    readonly MIDDLE_DOT: "middleDot";
};

export declare type PositionalTabOptions = {
    readonly alignment: (typeof PositionalTabAlignment)[keyof typeof PositionalTabAlignment];
    readonly relativeTo: (typeof PositionalTabRelativeTo)[keyof typeof PositionalTabRelativeTo];
    readonly leader: (typeof PositionalTabLeader)[keyof typeof PositionalTabLeader];
};

export declare const PositionalTabRelativeTo: {
    readonly MARGIN: "margin";
    readonly INDENT: "indent";
};

export declare type PositivePercentage = `${number}%`;

export declare type PositiveUniversalMeasure = `${number}${"mm" | "cm" | "in" | "pt" | "pc" | "pi"}`;

export declare const positiveUniversalMeasureValue: (val: PositiveUniversalMeasure) => PositiveUniversalMeasure;

export declare const PrettifyType: {
    readonly NONE: "";
    readonly WITH_2_BLANKS: "  ";
    readonly WITH_4_BLANKS: "    ";
    readonly WITH_TAB: "\t";
};

declare type RegularImageOptions = {
    readonly type: "jpg" | "png" | "gif" | "bmp";
    readonly data: Buffer | string | Uint8Array | ArrayBuffer;
};

declare type RegularMediaData = {
    readonly type: "jpg" | "png" | "gif" | "bmp";
};

declare class Relationship extends XmlComponent {
    constructor(id: string, type: RelationshipType, target: string, targetMode?: (typeof TargetModeType)[keyof typeof TargetModeType]);
}

declare class Relationships extends XmlComponent {
    constructor();
    createRelationship(id: number | string, type: RelationshipType, target: string, targetMode?: (typeof TargetModeType)[keyof typeof TargetModeType]): Relationship;
    get RelationshipCount(): number;
}

declare type RelationshipType = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" | "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" | "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" | "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" | "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable" | "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings" | "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" | "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" | "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" | "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" | "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" | "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties" | "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" | "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" | "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes" | "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments" | "http://schemas.openxmlformats.org/officeDocument/2006/relationships/font";

export declare const RelativeHorizontalPosition: {
    readonly CENTER: "center";
    readonly INSIDE: "inside";
    readonly LEFT: "left";
    readonly OUTSIDE: "outside";
    readonly RIGHT: "right";
};

export declare type RelativeMeasure = `${"-" | ""}${number}${"em" | "ex"}`;

export declare const RelativeVerticalPosition: {
    readonly CENTER: "center";
    readonly INSIDE: "inside";
    readonly BOTTOM: "bottom";
    readonly OUTSIDE: "outside";
    readonly INLINE: "inline";
    readonly TOP: "top";
};

export declare class Run extends XmlComponent {
    protected readonly properties: RunProperties;
    constructor(options: IRunOptions);
}

export declare class RunFonts extends XmlComponent {
    constructor(name: string, hint?: string);
    constructor(attrs: string | IFontAttributesProperties);
}

export declare class RunProperties extends IgnoreIfEmptyXmlComponent {
    constructor(options?: IRunPropertiesOptions);
    push(item: XmlComponent): void;
}

export declare class RunPropertiesChange extends XmlComponent {
    constructor(options: IRunPropertiesChangeOptions);
}

export declare class RunPropertiesDefaults extends XmlComponent {
    constructor(options?: IRunStylePropertiesOptions);
}

declare const SchemeColor: {
    readonly BG1: "bg1";
    readonly TX1: "tx1";
    readonly BG2: "bg2";
    readonly TX2: "tx2";
    readonly ACCENT1: "accent1";
    readonly ACCENT2: "accent2";
    readonly ACCENT3: "accent3";
    readonly ACCENT4: "accent4";
    readonly ACCENT5: "accent5";
    readonly ACCENT6: "accent6";
    readonly HLINK: "hlink";
    readonly FOLHLINK: "folHlink";
    readonly DK1: "dk1";
    readonly LT1: "lt1";
    readonly DK2: "dk2";
    readonly LT2: "lt2";
    readonly PHCLR: "phClr";
};

export declare const sectionMarginDefaults: {
    TOP: number;
    RIGHT: number;
    BOTTOM: number;
    LEFT: number;
    HEADER: number;
    FOOTER: number;
    GUTTER: number;
};

export declare const sectionPageSizeDefaults: {
    WIDTH: number;
    HEIGHT: number;
    ORIENTATION: "portrait";
};

export declare class SectionProperties extends XmlComponent {
    constructor({ page: { size: { width, height, orientation, }, margin: { top, right, bottom, left, header, footer, gutter, }, pageNumbers, borders, textDirection, }, grid: { linePitch, charSpace, type: gridType }, headerWrapperGroup, footerWrapperGroup, lineNumbers, titlePage, verticalAlign, column, type, }?: ISectionPropertiesOptions);
    private addHeaderFooterGroup;
}

export declare const SectionType: {
    readonly NEXT_PAGE: "nextPage";
    readonly NEXT_COLUMN: "nextColumn";
    readonly CONTINUOUS: "continuous";
    readonly EVEN_PAGE: "evenPage";
    readonly ODD_PAGE: "oddPage";
};

export declare class SectionTypeAttributes extends XmlAttributeComponent<{
    readonly val: (typeof SectionType)[keyof typeof SectionType];
}> {
    protected readonly xmlKeys: {
        val: string;
    };
}

declare class Separate extends XmlComponent {
    constructor(dirty?: boolean);
}

export declare class Separator extends EmptyElement {
    constructor();
}

export declare class SequentialIdentifier extends Run {
    constructor(identifier: string);
}

declare class Settings extends XmlComponent {
    constructor(options: ISettingsOptions);
}

export declare class Shading extends XmlComponent {
    constructor({ fill, color, type }: IShadingAttributesProperties);
}

export declare const ShadingType: {
    readonly CLEAR: "clear";
    readonly DIAGONAL_CROSS: "diagCross";
    readonly DIAGONAL_STRIPE: "diagStripe";
    readonly HORIZONTAL_CROSS: "horzCross";
    readonly HORIZONTAL_STRIPE: "horzStripe";
    readonly NIL: "nil";
    readonly PERCENT_5: "pct5";
    readonly PERCENT_10: "pct10";
    readonly PERCENT_12: "pct12";
    readonly PERCENT_15: "pct15";
    readonly PERCENT_20: "pct20";
    readonly PERCENT_25: "pct25";
    readonly PERCENT_30: "pct30";
    readonly PERCENT_35: "pct35";
    readonly PERCENT_37: "pct37";
    readonly PERCENT_40: "pct40";
    readonly PERCENT_45: "pct45";
    readonly PERCENT_50: "pct50";
    readonly PERCENT_55: "pct55";
    readonly PERCENT_60: "pct60";
    readonly PERCENT_62: "pct62";
    readonly PERCENT_65: "pct65";
    readonly PERCENT_70: "pct70";
    readonly PERCENT_75: "pct75";
    readonly PERCENT_80: "pct80";
    readonly PERCENT_85: "pct85";
    readonly PERCENT_87: "pct87";
    readonly PERCENT_90: "pct90";
    readonly PERCENT_95: "pct95";
    readonly REVERSE_DIAGONAL_STRIPE: "reverseDiagStripe";
    readonly SOLID: "solid";
    readonly THIN_DIAGONAL_CROSS: "thinDiagCross";
    readonly THIN_DIAGONAL_STRIPE: "thinDiagStripe";
    readonly THIN_HORIZONTAL_CROSS: "thinHorzCross";
    readonly THIN_REVERSE_DIAGONAL_STRIPE: "thinReverseDiagStripe";
    readonly THIN_VERTICAL_STRIPE: "thinVertStripe";
    readonly VERTICAL_STRIPE: "vertStripe";
};

export declare const shortHexNumber: (val: string) => string;

export declare const signedHpsMeasureValue: (val: UniversalMeasure | number) => string | number;

export declare const signedTwipsMeasureValue: (val: UniversalMeasure | number) => UniversalMeasure | number;

export declare class SimpleField extends XmlComponent {
    constructor(instruction: string, cachedValue?: string);
}

export declare class SimpleMailMergeField extends SimpleField {
    constructor(fieldName: string);
}

export declare class SimplePos extends XmlComponent {
    constructor();
}

export declare class SoftHyphen extends EmptyElement {
    constructor();
}

export declare const SpaceType: {
    readonly DEFAULT: "default";
    readonly PRESERVE: "preserve";
};

export declare class Spacing extends XmlComponent {
    constructor(options: ISpacingProperties);
}

export declare class StringContainer extends XmlComponent {
    constructor(name: string, val: string);
}

export declare class StringEnumValueElement<T extends string> extends XmlComponent {
    constructor(name: string, val: T);
}

export declare class StringValueElement extends XmlComponent {
    constructor(name: string, val: string);
}

export declare class Style extends XmlComponent {
    constructor(styleId: string);
}

declare class Style_2 extends XmlComponent {
    constructor(attributes: IStyleAttributes, options: IStyleOptions);
}

export declare class StyleForCharacter extends Style_2 {
    private readonly runProperties;
    constructor(options: ICharacterStyleOptions);
}

export declare class StyleForParagraph extends Style_2 {
    private readonly paragraphProperties;
    private readonly runProperties;
    constructor(options: IParagraphStyleOptions);
}

export declare class StyleLevel {
    readonly styleName: string;
    readonly level: number;
    constructor(styleName: string, level: number);
}

export declare class Styles extends XmlComponent {
    constructor(options: IStylesOptions);
}

declare type SvgMediaData = {
    readonly type: "svg";
    readonly fallback: RegularMediaData & CoreMediaData;
};

declare type SvgMediaOptions = {
    readonly type: "svg";
    readonly data: Buffer | string | Uint8Array | ArrayBuffer;
    readonly fallback: RegularImageOptions;
};

export declare class SymbolRun extends Run {
    constructor(options: ISymbolRunOptions | string);
}

export declare class Tab extends EmptyElement {
    constructor();
}

export declare class TabAttributes extends XmlAttributeComponent<{
    readonly val: (typeof TabStopType)[keyof typeof TabStopType];
    readonly pos: string | number;
    readonly leader?: (typeof LeaderType)[keyof typeof LeaderType];
}> {
    protected readonly xmlKeys: {
        val: string;
        pos: string;
        leader: string;
    };
}

export declare class Table extends FileChild {
    constructor({ rows, width, columnWidths, margins, indent, float, layout, style, borders, alignment, visuallyRightToLeft, }: ITableOptions);
}

export declare const TableAnchorType: {
    readonly MARGIN: "margin";
    readonly PAGE: "page";
    readonly TEXT: "text";
};

export declare class TableBorders extends XmlComponent {
    static readonly NONE: {
        top: {
            style: "none";
            size: number;
            color: string;
        };
        bottom: {
            style: "none";
            size: number;
            color: string;
        };
        left: {
            style: "none";
            size: number;
            color: string;
        };
        right: {
            style: "none";
            size: number;
            color: string;
        };
        insideHorizontal: {
            style: "none";
            size: number;
            color: string;
        };
        insideVertical: {
            style: "none";
            size: number;
            color: string;
        };
    };
    constructor(options: ITableBordersOptions);
}

export declare class TableCell extends XmlComponent {
    readonly options: ITableCellOptions;
    constructor(options: ITableCellOptions);
    prepForXml(context: IContext): IXmlableObject | undefined;
}

export declare class TableCellBorders extends IgnoreIfEmptyXmlComponent {
    constructor(options: ITableCellBorders);
}

export declare class TableFloatProperties extends XmlComponent {
    constructor({ horizontalAnchor, verticalAnchor, absoluteHorizontalPosition, relativeHorizontalPosition, absoluteVerticalPosition, relativeVerticalPosition, bottomFromText, topFromText, leftFromText, rightFromText, overlap, }: ITableFloatOptions);
}

export declare class TableLayout extends XmlComponent {
    constructor(type: (typeof TableLayoutType)[keyof typeof TableLayoutType]);
}

export declare const TableLayoutType: {
    readonly AUTOFIT: "autofit";
    readonly FIXED: "fixed";
};

export declare class TableOfContents extends FileChild {
    constructor(alias?: string, properties?: ITableOfContentsOptions);
}

export declare class TableProperties extends IgnoreIfEmptyXmlComponent {
    constructor(options: ITablePropertiesOptions);
}

export declare class TableRow extends XmlComponent {
    private readonly options;
    constructor(options: ITableRowOptions);
    get CellCount(): number;
    get cells(): readonly TableCell[];
    addCellToIndex(cell: TableCell, index: number): void;
    addCellToColumnIndex(cell: TableCell, columnIndex: number): void;
    rootIndexToColumnIndex(rootIndex: number): number;
    columnIndexToRootIndex(columnIndex: number, allowEndNewCell?: boolean): number;
}

export declare class TableRowHeight extends XmlComponent {
    constructor(value: number | PositiveUniversalMeasure, rule: (typeof HeightRule)[keyof typeof HeightRule]);
}

export declare class TableRowHeightAttributes extends XmlAttributeComponent<{
    readonly value: number | string;
    readonly rule: (typeof HeightRule)[keyof typeof HeightRule];
}> {
    protected readonly xmlKeys: {
        value: string;
        rule: string;
    };
}

export declare class TableRowProperties extends IgnoreIfEmptyXmlComponent {
    constructor(options: ITableRowPropertiesOptions);
}

export declare class TableWidthElement extends XmlComponent {
    constructor(name: string, { type, size }: ITableWidthProperties);
}

export declare class TabStop extends XmlComponent {
    constructor(tabDefinitions: readonly TabStopDefinition[]);
}

export declare type TabStopDefinition = {
    readonly type: (typeof TabStopType)[keyof typeof TabStopType];
    readonly position: number | (typeof TabStopPosition)[keyof typeof TabStopPosition];
    readonly leader?: (typeof LeaderType)[keyof typeof LeaderType];
};

export declare class TabStopItem extends XmlComponent {
    constructor({ type, position, leader }: TabStopDefinition);
}

export declare const TabStopPosition: {
    readonly MAX: 9026;
};

export declare const TabStopType: {
    readonly LEFT: "left";
    readonly RIGHT: "right";
    readonly CENTER: "center";
    readonly BAR: "bar";
    readonly CLEAR: "clear";
    readonly DECIMAL: "decimal";
    readonly END: "end";
    readonly NUM: "num";
    readonly START: "start";
};

declare const TargetModeType: {
    readonly EXTERNAL: "External";
};

export declare class TDirection extends XmlComponent {
    constructor(value: (typeof TextDirection)[keyof typeof TextDirection]);
}

export declare class Textbox extends FileChild {
    constructor({ style, children, ...rest }: ITextboxOptions);
}

export declare const TextDirection: {
    readonly BOTTOM_TO_TOP_LEFT_TO_RIGHT: "btLr";
    readonly LEFT_TO_RIGHT_TOP_TO_BOTTOM: "lrTb";
    readonly TOP_TO_BOTTOM_RIGHT_TO_LEFT: "tbRl";
};

export declare const TextEffect: {
    readonly BLINK_BACKGROUND: "blinkBackground";
    readonly LIGHTS: "lights";
    readonly ANTS_BLACK: "antsBlack";
    readonly ANTS_RED: "antsRed";
    readonly SHIMMER: "shimmer";
    readonly SPARKLE: "sparkle";
    readonly NONE: "none";
};

export declare class TextRun extends Run {
    constructor(options: IRunOptions | string);
}

export declare const TextWrappingSide: {
    readonly BOTH_SIDES: "bothSides";
    readonly LEFT: "left";
    readonly RIGHT: "right";
    readonly LARGEST: "largest";
};

export declare const TextWrappingType: {
    readonly NONE: 0;
    readonly SQUARE: 1;
    readonly TIGHT: 2;
    readonly TOP_AND_BOTTOM: 3;
};

export declare class ThematicBreak extends XmlComponent {
    constructor();
}

export declare const twipsMeasureValue: (val: PositiveUniversalMeasure | number) => PositiveUniversalMeasure | number;

export declare class Type extends XmlComponent {
    constructor(value: (typeof SectionType)[keyof typeof SectionType]);
}

export declare const uCharHexNumber: (val: string) => string;

export declare class Underline extends XmlComponent {
    constructor(underlineType?: (typeof UnderlineType)[keyof typeof UnderlineType], color?: string);
}

export declare const UnderlineType: {
    readonly SINGLE: "single";
    readonly WORDS: "words";
    readonly DOUBLE: "double";
    readonly THICK: "thick";
    readonly DOTTED: "dotted";
    readonly DOTTEDHEAVY: "dottedHeavy";
    readonly DASH: "dash";
    readonly DASHEDHEAVY: "dashedHeavy";
    readonly DASHLONG: "dashLong";
    readonly DASHLONGHEAVY: "dashLongHeavy";
    readonly DOTDASH: "dotDash";
    readonly DASHDOTHEAVY: "dashDotHeavy";
    readonly DOTDOTDASH: "dotDotDash";
    readonly DASHDOTDOTHEAVY: "dashDotDotHeavy";
    readonly WAVE: "wave";
    readonly WAVYHEAVY: "wavyHeavy";
    readonly WAVYDOUBLE: "wavyDouble";
    readonly NONE: "none";
};

export declare const uniqueId: () => string;

export declare type UniqueNumericIdCreator = () => number;

export declare const uniqueNumericIdCreator: (initial?: number) => UniqueNumericIdCreator;

export declare const uniqueUuid: () => string;

export declare type UniversalMeasure = `${"-" | ""}${number}${"mm" | "cm" | "in" | "pt" | "pc" | "pi"}`;

export declare const universalMeasureValue: (val: UniversalMeasure) => UniversalMeasure;

export declare const unsignedDecimalNumber: (val: number) => number;

export declare const VerticalAlign: {
    readonly BOTTOM: "bottom";
    readonly CENTER: "center";
    readonly TOP: "top";
};

export declare class VerticalAlignAttributes extends XmlAttributeComponent<{
    readonly verticalAlign?: (typeof VerticalAlign)[keyof typeof VerticalAlign];
}> {
    protected readonly xmlKeys: {
        verticalAlign: string;
    };
}

export declare class VerticalAlignElement extends XmlComponent {
    constructor(value: (typeof VerticalAlign)[keyof typeof VerticalAlign]);
}

export declare class VerticalMerge extends XmlComponent {
    constructor(value: (typeof VerticalMergeType)[keyof typeof VerticalMergeType]);
}

export declare const VerticalMergeType: {
    readonly CONTINUE: "continue";
    readonly RESTART: "restart";
};

export declare class VerticalPosition extends XmlComponent {
    constructor(verticalPosition: IVerticalPositionOptions);
}

export declare const VerticalPositionAlign: {
    readonly BOTTOM: "bottom";
    readonly CENTER: "center";
    readonly INSIDE: "inside";
    readonly OUTSIDE: "outside";
    readonly TOP: "top";
};

export declare const VerticalPositionRelativeFrom: {
    readonly BOTTOM_MARGIN: "bottomMargin";
    readonly INSIDE_MARGIN: "insideMargin";
    readonly LINE: "line";
    readonly MARGIN: "margin";
    readonly OUTSIDE_MARGIN: "outsideMargin";
    readonly PAGE: "page";
    readonly PARAGRAPH: "paragraph";
    readonly TOP_MARGIN: "topMargin";
};

declare type VmlShapeStyle = {
    readonly flip?: "x" | "y" | "xy" | "yx";
    readonly height?: LengthUnit;
    readonly left?: LengthUnit;
    readonly marginBottom?: LengthUnit;
    readonly marginLeft?: LengthUnit;
    readonly marginRight?: LengthUnit;
    readonly marginTop?: LengthUnit;
    readonly positionHorizontal?: "absolute" | "left" | "center" | "right" | "inside" | "outside";
    readonly positionHorizontalRelative?: "margin" | "page" | "text" | "char";
    readonly positionVertical?: "absolute" | "left" | "center" | "right" | "inside" | "outside";
    readonly positionVerticalRelative?: "margin" | "page" | "text" | "char";
    readonly wrapDistanceBottom?: number;
    readonly wrapDistanceLeft?: number;
    readonly wrapDistanceRight?: number;
    readonly wrapDistanceTop?: number;
    readonly wrapEdited?: boolean;
    readonly wrapStyle?: "square" | "none";
    readonly position?: "static" | "absolute" | "relative";
    readonly rotation?: number;
    readonly top?: LengthUnit;
    readonly visibility?: "hidden" | "inherit";
    readonly width: LengthUnit;
    readonly zIndex?: "auto" | number;
};

export declare const WidthType: {
    readonly AUTO: "auto";
    readonly DXA: "dxa";
    readonly NIL: "nil";
    readonly PERCENTAGE: "pct";
};

export declare const WORKAROUND2 = "";

export declare const WORKAROUND3 = "";

export declare const WORKAROUND4 = "";

export declare class WrapNone extends XmlComponent {
    constructor();
}

export declare class WrapSquare extends XmlComponent {
    constructor(textWrapping: ITextWrapping, margins?: IMargins);
}

export declare class WrapTight extends XmlComponent {
    constructor(margins?: IMargins);
}

export declare class WrapTopAndBottom extends XmlComponent {
    constructor(margins?: IMargins);
}

export declare abstract class XmlAttributeComponent<T extends Record<string, any>> extends BaseXmlComponent {
    private readonly root;
    protected readonly xmlKeys?: AttributeMap<T>;
    constructor(root: T);
    prepForXml(_: IContext): IXmlableObject;
}

export declare abstract class XmlComponent extends BaseXmlComponent {
    protected root: (BaseXmlComponent | string | any)[];
    constructor(rootKey: string);
    prepForXml(context: IContext): IXmlableObject | undefined;
    addChildElement(child: XmlComponent | string): XmlComponent;
}

export declare class YearLong extends EmptyElement {
    constructor();
}

export declare class YearShort extends EmptyElement {
    constructor();
}

export { }
