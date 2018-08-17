//Custom Exam
export const DELETE_CUSTOM_EXAM = 'DELETE_CUSTOM_EXAM';
export const DELETE_CUSTOM_EXAM_SUCCESS = 'DELETE_CUSTOM_EXAM_SUCCESS';
//================== School Type ========================
export const SCHOOL_TYPES = {
    putong: '普通',
    jiaoyuju: '教育局',
    jigou: '机构',
    peixunjigou: '培训机构',
    qita: '其它',
    liankao: '联考'
}// 机构 培训机构 对应的是普通实体学校
export const EXAM_TYPES = {
    yuejuanOne: '1',
    yuejuanTwo: '10',
    liankao: '20',
    zouban: '25',
    custom: '40'
};
export const DEFAULT_GRADE_SEGMENT = [0, 0.3, 0.6, 0.8, 1];

export const DEFAULT_GRADE = [{low:90,high:100,label:'优秀'},{low:80,high:100,label:'良好'},{low:60,high:100,label:'及格'},{low:0,high:30,label:'低分'}];

//================== New Tongkao ========================
export const INIT_TONGKAO_TOTAL = 'INIT_TONGKAO_TOTAL';
export const INIT_TONGKAO_TOTAL_SUCCESS = 'INIT_TONGKAO_TOTAL_SUCCESS';
export const INIT_TONGKAO_DASHBOARD = 'INIT_TONGKAO_DASHBOARD';
export const INIT_TONGKAO_DASHBOARD_SUCCESS = 'INIT_TONGKAO_DASHBOARD_SUCCESS';

export const FETCH_TONGKAO_RANK_INFO = 'FETCH_TONGKAO_RANK_INFO';
export const FETCH_TONGKAO_RANK_INFO_SUCCESS = 'FETCH_TONGKAO_RANK_INFO_SUCCESS';

export const INIT_TONGKAO_RANK = 'INIT_TONGKAO_RANK';
export const INIT_TONGKAO_RANK_SUCCESS = 'INIT_TONGKAO_RANK_SUCCESS';
export const UPDATE_TONGKAO_RANK = 'UPDATE_TONGKAO_RANK';
export const UPDATE_TONGKAO_RANK_SUCCESS = 'UPDATE_TONGKAO_RANK_SUCCESS';

export const DISABLE_TONGKAO_DASHBOARD = 'DISABLE_TONGKAO_DASHBOARD';
export const DISABLE_TONGKAO_TOTALREPORT = 'DISABLE_TONGKAO_TOTALREPORT';

export const INIT_TONGKAO_TABLEDS = 'INIT_TONGKAO_TABLEDS';
export const INIT_TONGKAO_TABLEDS_SUCCESS = 'INIT_TONGKAO_TABLEDS_SUCCESS';
export const INIT_TABLE_REPORT = 'INIT_TABLE_REPORT'
export const INIT_TABLE_REPORT_SUCCESS = 'INIT_TABLE_REPORT_SUCCESS'

export const DEFAULT_PAGESIZE = 25;
export const DEFAULT_PAGEVALUE = 0;
export const NOSELECT_SCORE = -100;// 学生未做的选择题标记为-100分

export const INIT_I_R_QAINFO_Q = 'INIT_I_R_QAINFO_Q'
export const INIT_I_R_QAINFO_FACTOR_SUCCESS = 'INIT_I_R_QAINFO_FACTOR_SUCCESS'
export const INIT_I_R_QAINFO_Q_TONGKAO_SUCCESS = 'INIT_I_R_QAINFO_Q_TONGKAO_SUCCESS'
export const LOADING_I_R_QAINFO_Q_TONGKAO = 'LOADING_I_R_QAINFO_Q_TONGKAO'
export const INIT_I_R_QAINFO_Q_FACTOR_SUCCESS = 'INIT_I_R_QAINFO_Q_FACTOR_SUCCESS'
export const INIT_I_R_QAINFO_QGRP_FACTOR_SUCCESS = 'INIT_I_R_QAINFO_QGRP_FACTOR_SUCCESS'
export const DISABLE_I_R_QAINFO = 'DISABLE_I_R_QAINFO'
export const LOADING_I_R_QAINFO_FACTOR = 'LOADING_I_R_QAINFO_FACTOR'
export const LOADING_I_R_QAINFO_Q_FACTOR = 'LOADING_I_R_QAINFO_Q_FACTOR'
export const LOADING_I_R_QAINFO_QGRP_FACTOR = 'LOADING_I_R_QAINFO_QGRP_FACTOR'

export const INIT_I_R_RANK_SCALE = 'INIT_I_R_RANK_SCALE'
export const INIT_I_R_RANK_SCALE_SUCCESS = 'INIT_I_R_RANK_SCALE_SUCCESS'
export const FETCH_I_R_RANK_SCALE_CFG_SUCCESS = 'FETCH_I_R_RANK_SCALE_CFG_SUCCESS'
export const DISABLE_I_R_RANK_SCALE = 'DISABLE_I_R_RANK_SCALE'
export const LOADING_I_R_RANK_SCALE = 'LOADING_I_R_RANK_SCALE'
export const LOADING_I_R_RANK_SCALE_CFG = 'LOADING_I_R_RANK_SCALE_CFG'

export const INIT_TONGKAO_TABLE_QUESTION = 'INIT_TONGKAO_TABLE_QUESTION'
export const INIT_TONGKAO_TABLE_QUESTION_SUCCESS = 'INIT_TONGKAO_TABLE_QUESTION_SUCCESS'
export const DISABLE_TONGKAO_TABLE_QUESTION = 'DISABLE_TONGKAO_TABLE_QUESTION'

export const INIT_TONGKAO_TABLE_CLCOM = 'INIT_TONGKAO_TABLE_CLCOM';
export const INIT_TONGKAO_TABLE_CLCOM_SUCCESS = 'INIT_TONGKAO_TABLE_CLCOM_SUCCESS';
export const DISABLE_TONGKAO_TABLE_CLCOM = 'DISABLE_TONGKAO_TABLE_CLCOM'

export const INIT_TONGKAO_TABLE_SCORE_DIV = 'INIT_TONGKAO_TABLE_SCORE_DIV'
export const INIT_TONGKAO_TABLE_SCORE_DIV_SUCCESS = 'INIT_TONGKAO_TABLE_SCORE_DIV_SUCCESS'
export const DISABLE_TONGKAO_TABLE_SCORE_DIV = 'DISABLE_TONGKAO_TABLE_SCORE_DIV'


//================== New Global ========================
export const INIT_ME = 'INIT_ME';
export const INIT_ME_SUCCESS = 'INIT_ME_SUCCESS';
export const LOADING_DONE = 'LOADING_DONE';
export const LOADING_START = 'LOADING_START';
export const THROW_ERROR = 'THROW_ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';
//================== New ReportDS ========================
export const INIT_REPORT_DS = 'INIT_REPORT_DS';
export const INIT_REPORT_DS_REQUEST = 'INIT_REPORT_DS_REQUEST';
export const INIT_REPORT_DS_SUCCESS = 'INIT_REPORT_DS_SUCCESS';
export const INIT_REPORT_DS_FAILURE = 'INIT_REPORT_DS_FAILURE';

export const UPDATE_LEVELINFO = 'UPDATE_LEVELINFO';
export const UPDATE_LEVLE_BUFFERS = 'UPDATE_LEVLE_BUFFERS';
export const UPDATE_GRADES = 'UPDATE_GRADES';

export const DISABLE_HAVE_INIT = 'DISABLE_HAVE_INIT';
//================= New Save ==============================
export const SAVE_BASELINE = 'SAVE_BASELINE';

//=============== New ClassReport =============
export const CHANGE_CLASS = 'CHANGE_CLASS';

//================= New ExamsCache ===================
export const EXAMS_CACHE_IS_LOADING = 'EXAMS_CACHE_IS_LOADING';

export const INIT_EXAMCACHE = 'INIT_EXAMCACHE';
export const INIT_EXAMCACHE_REQUEST = 'INIT_EXAMCACHE_REQUEST';
export const INIT_EXAMCACHE_SUCCESS = 'INIT_EXAMCACHE_SUCCESS';

export const GET_MORE_EXAMS_INFO = 'GET_MORE_EXAMS_INFO';
export const GET_MORE_EXAMS_INFO_REQUEST = 'GET_MORE_EXAMS_INFO_REQUEST';
export const GET_MORE_EXAMS_INFO_SUCCESS = 'GET_MORE_EXAMS_INFO_SUCCESS';

//================= Home =============================
export const INIT_HOME = 'INIT_HOME';
export const INIT_HOME_REQUEST = 'INIT_HOME_REQUEST';
export const INIT_HOME_SUCCESS = 'INIT_HOME_SUCCESS';
export const INIT_HOME_FAILURE = 'INIT_HOME_FAILURE';
export const FETCH_HOME_RAW_DATA_SUCCESS = 'FETCH_HOME_RAW_DATA_SUCCESS';

//注意：这两个变量值是一一对应的，如果修改其中一个，那么另一个也要修改。
export const FROM_YUJUAN_ONE_TEXT = '阅卷';//阅卷1.x
export const FROM_YUJUAN_TWO_TEXT = '阅卷';//阅卷2.x
export const FROM_UPLOAD_TEXT = '上传';
export const FROM_LIANKAO_TEXT = '联考';
export const FROM_CUSTOM_TEXT = '自定义';
export const FROM_ZOUBAN_TEXT = '走班';
export const FROM_FLAG = {
    '1': FROM_YUJUAN_ONE_TEXT,
    '10': FROM_YUJUAN_TWO_TEXT,
    '20': FROM_LIANKAO_TEXT,
    '25': FROM_ZOUBAN_TEXT,
    '30': FROM_UPLOAD_TEXT,
    '40': FROM_CUSTOM_TEXT
};

export const  PAPER_ORIGIN = {
    system: 'system',
    upload: 'upload'
}
//================= Dashboard ==========================

export const INIT_DASHBOARD = 'INIT_DASHBOARD';
export const INIT_DASHBOARD_REQUEST = 'INIT_DASHBOARD_REQUEST';
export const INIT_DASHBOARD_SUCCESS = 'INIT_DASHBOARD_SUCCESS';
export const INIT_DASHBOARD_FAILURE = 'INIT_DASHBOARD_FAILURE';

//=============== SchoolAnalysis =============================
export const CHANGE_LEVEL = 'CHANGE_LEVEL';
export const CHANGE_LEVEL_BUFFERS = 'CHANGE_LEVEL_BUFFERS';

export const SUBJECTS_WEIGHT = ['语文', '数学', '英语', '理综', '文综', '物理', '化学', '生物', '政治', '历史', '地理'];
export const SUBJECTS_PERIOD = {
  HIGH: ['语文', '数学', '英语', '物理', '化学', '生物', '政治', '历史', '地理'],
  JUNIOR: ['语文', '数学', '英语', '物理', '化学', '生物', '思想品德(政治)', '历史', '地理','科学'],
  PRIMARY: ['语文', '数学', '英语']
}

export const NUMBER_MAP = {
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    7: '七',
    8: '八',
    9: '九',
    10: '十'
};

export const LETTER_MAP = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G'
};

export const LETTER_INDEX = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6
};

export const LETTER_TITLE_MAP = {
    0: '优秀',
    1: '良好',
    2: '及格',
    3: '较差'
};

export const FIELD_KEYS = ['SUBJECT_SCORE', 'SUBJECT_RANK_IN_ALL', 'SUBJECT_RANK_IN_SCHOOL'];
export const FIELD_KEYS_MAP = { '_score': 'SUBJECT_SCORE', '_rank': 'SUBJECT_RANK_IN_ALL', '_schoolRank': 'SUBJECT_RANK_IN_SCHOOL', '_obj_score': 'OBJ_SCORE', '_sub_score': 'SUB_SCORE' };
export const FIELD_KEYNAME_MAP = { 'SUBJECT_SCORE': '分数', 'SUBJECT_RANK_IN_ALL': '排名', 'SUBJECT_RANK_IN_SCHOOL': '学校排名' };
export const FIELDNAMEMAP = {
    // all group
    ALL: 'all',

    // all subject
    ALL_SUBJECT: 'all',

    // rank subject
    RANK_SUB_SUM: 'totalScore',      // TODO rename to sum

    // rank field
    RANK_COL_TOTAL: 'score',         // 总分排序
    RANK_COL_ALL: 'rank',           // 总分年级排名
    RANK_COL_SCHOOL: "schoolRank",   // 校内排名
    RANK_COL_CLASS: "classRank",     // 班级排名

    KEY_SEPARATOR: ":",
    VAR_SEPARATOR: "-",

    // stu column
    TOTAL_SCORE: 0,
    RANK_IN_ALL: 1,
    RANK_IN_SCHOOL: 2,
    RANK_IN_CLASS: 3,
    OBJ_SCORE: 4,
    SUB_SCORE: 5,
    ID: 6,
    NAME: 7,
    KAOHAO: 8,
    CLASS: 9,
    SCHOOL: 10,
    SUB_SCORES: 11,
    SCORE_CONVERT_INFO: 12,
    XUEHAO: 13,


    // subject obj column
    SUBJECT_SCORE: 0,
    SUBJECT_RANK_IN_ALL: 1,
    SUBJECT_RANK_IN_SCHOOL: 2,
    SUBJECT_RANK_IN_CLASS: 3,
    SUBJECT_OBJ_SCORE: 4,
    SUBJECT_SUB_SCORE: 5,
    SUBJECT_CONVERT_INFO: 6
};



//=============== CustomAnalysis =============================
export const ADD_PAPER_INFO = 'ADD_PAPER_INFO';
export const ADD_PAPER_INFO_SUCCESS = 'ADD_PAPER_INFO_SUCCESS';

export const SUBTRACT_PAPER_INFO = 'SUBTRACT_PAPER_INFO';

export const CHECK_ALL_QUESTION = 'CHECK_ALL_QUESTION';
export const CHECK_ONE_QUESTION = 'CHECK_ONE_QUESTION';

export const SET_PAPER_SQM = 'SET_PAPER_SQM';
export const SET_MERGED_SQM = 'SET_MERGED_SQM';
export const CHANGE_QUESTION_NAME = 'CHANGE_QUESTION_NAME';
export const SET_GROUP_MAP = 'SET_GROUP_MAP';

export const SET_PAGE_INDEX = 'SET_PAGE_INDEX';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';

export const SAVE_CURRENT_SUBJECT = 'SAVE_CURRENT_SUBJECT';
export const SET_ANALYSIS_NAME = 'SET_ANALYSIS_NAME';
export const SET_CREATE_STATUS = 'SET_CREATE_STATUS';
export const EDIT_SUBJECT = 'EDIT_SUBJECT';
export const DELE_SUBJECT = 'DELE_SUBJECT';
export const CHANGE_CURRENT_SUBJECT_NAME = 'CHANGE_CURRENT_SUBJECT_NAME';
export const DISCARD_CURRENT_SUBJECT = 'DISCARD_CURRENT_SUBJECT';
export const UPDATE_SUBJECT_SQM = 'UPDATE_SUBJECT_SQM';
export const SET_CURSUBJECT_SQM = 'SET_CURSUBJECT_SQM';
export const RESET_DS = 'RESET_DS'
export const CHANGE_PAPER_MANFEN = 'CHANGE_PAPER_MANFEN'
//===================== RankReport ===========================
export const INIT_RANKREPORT = 'INIT_RANKREPORT';
export const INIT_RANKREPORT_SUCCESS = 'INIT_RANKREPORT_SUCCESS';

//====================== color ==============================
export const COLORS_MAP = {
    A02 : '#EFF1F4',
    A11 : '#de5d44',
    A12 : '#40b1de',
    B03 : '#1daef8',
    B04 : '#69c170',
    B06 : '#f7be38',
    B07 : '#f6953d',
    B08 : '#ee6b52',
    B10 : '#c5e9f8',
    B12 : '#e0f4fc',
    C02:  '#FAFAFA',
    C03 : '#f2f2f2',
    C04 : '#eeeeee',
    C05 : '#e7e7e7',
    C07 : '#BFBFBF',
    C08:  '#B1B1B1',
    C09 : '#999999',
    C10 : '#6a6a6a',
    C11:  '#4d4d4d',
    C12 : '#333333',
    C14 : '#fdfdfd'
}
export const BACKGROUND_COLOR = '#EFF1F4';
export const A11 = '#de5d44';
export const A12 = '#40b1de';
export const B03 = '#59bde5';
export const B04 = '#69c170';
export const B06 = '#f7be38';
export const B07 = '#f6953d';
export const B08 = '#ee6b52';
export const C03 = '#f2f2f2';
export const C04 = '#eeeeee';
export const C05 = '#e7e7e7';
export const C07 = '#BFBFBF';
export const C09 = '#999999';
export const C12 = '#333333';
export const C14 = '#fdfdfd';

export const DEFAULT_LEVELS = [
    {sumPercentage: 15}, {sumPercentage: 35}, {sumPercentage: 60}
];
export const STRENGTHEN_DEFAULT_LEVELS = [
    {sumPercentage: 10}, {sumPercentage: 40}, {sumPercentage: 70}
];
export const DEFAULT_LEVELGRADES = [85, 70, 60];
export const DEFAULT_LEVELBUFFER = 10;

export const DEFAULT_LEVEL_RADIO_RANGE = [1, 2, 3, 4, 5];//默认只提供这三个档次

//============================  Test ===============================
export const TEST_CHANGE_ONE = 'TEST_CHANGE_ONE';
export const TEST_CHANGE_TWO = 'TEST_CHANGE_TWO';

export const CHART_COLOR = ['#0099ff','#33cccc','#33cc33','#ff9900','#ff6633'];

export const HELPER_TITLE_MAP = {
    'equivalent': '分数转换'
}

export const ZOUBAN_TITLE_MAP = {
    'question': '命题质量分析报告',
    'class': '成绩明细',
    'personal': '学生成绩查询',
    'rank': '重要报表',
    'knowledge': '知识点与能力结构分析报告'
}

export const REPORT_TITLE_MAP = {
    'table':'重要报表',
    'rank': '排行榜',
    'school': '校级报告',
    'paper': '学科报告',
    'class': '班级报告',
    'knowledge': '知识点与能力结构分析报告',
    'liankao': '校级分析报告（联考）',
    'question': '命题质量分析报告',
    'teacher': '教师教学质量分析报告'
}

export const FETCH_EQUIVALENT_SCORE_INFO_LIST = 'FETCH_EQUIVALENT_SCORE_INFO_LIST';
export const FETCH_EQUIVALENT_SCORE_INFO_LIST_SUCCESS = 'FETCH_EQUIVALENT_SCORE_INFO_LIST_SUCCESS';


export const INIT_ZOUBAN_DS = 'INIT_ZOUBAN_DS';
export const INIT_ZOUBAN_DS_SUCCESS = 'INIT_ZOUBAN_DS_SUCCESS';

export const ADD_DS_TO_CACHE = 'ADD_DS_TO_CACHE';
// export const UPDATE_REPORT_DS_SUCCESS = 'UPDATE_REPORT_DS_SUCCESS';

export const INIT_TONGKAO_SCHOOL_REPORT = 'INIT_TONGKAO_SCHOOL_REPORT';
export const INIT_TONGKAO_SCHOOL_REPORT_SUCCESS = 'INIT_TONGKAO_SCHOOL_REPORT_SUCCESS';

export const MODULE_KEYS = [
    {id: 'biaoge', name: '学校重要报表'},
    {id: 'xiaonei', name: '学校联考报告'},
    {id: 'xueke', name: '学校学科报告'},
    {id: 'banji', name: '学校班级报告'},
    {id: 'question', name: '学校命题质量报告'},
    {id: 'zhishidian', name: '学校知识点分析报告'},
    {id: 'teacher', name: '学校教师教学质量报告'}
]

export const INIT_LIANKAO_EXAM_SCHOOLS = 'INIT_LIANKAO_EXAM_SCHOOLS';
export const INIT_LIANKAO_EXAM_SCHOOLS_SUCCESS = 'INIT_LIANKAO_EXAM_SCHOOLS_SUCCESS';
export const RESET_DSCACHE = 'RESET_DSCACHE';

export const INIT_TONGKAO_SUBJECT_TOTAL = 'INIT_TONGKAO_SUBJECT_TOTAL'
export const INIT_TONGKAO_SUBJECT_TOTAL_SUCCESS = 'INIT_TONGKAO_SUBJECT_TOTAL_SUCCESS'
export const DISABLE_TONGKAO_SUBJECT_TOTAL = 'DISABLE_TONGKAO_SUBJECT_TOTAL'

export const INIT_TST_EXAME_INFO_SUCCESS = 'INIT_TST_EXAME_INFO_SUCCESS'
export const INIT_TST_TREND_SUCCESS = 'INIT_TST_TREND_SUCCESS'
export const INIT_TST_TOTAL_SUCCESS = 'INIT_TST_TOTAL_SUCCESS'
export const INIT_TST_LEVEL_SUCCESS = 'INIT_TST_LEVEL_SUCCESS'
export const INIT_TST_FACTORS_SUCCESS = 'INIT_TST_FACTORS_SUCCESS'
export const INIT_TST_FACTOR_SUCCESS = 'INIT_TST_FACTOR_SUCCESS'
export const INIT_TST_CONTRI_FACTOR_SUCCESS = 'INIT_TST_CONTRI_FACTOR_SUCCESS'
export const INIT_TST_QUESTION_SUCCESS = 'INIT_TST_QUESTION_SUCCESS'
export const INIT_TST_DISADVANTAGE_SUCCESS = 'INIT_TST_DISADVANTAGE_SUCCESS'

export const LOADING_TST_TREND_START = 'LOADING_TST_TREND_START'
export const LOADING_TST_TOTAL_START = 'LOADING_TST_TOTAL_START'
export const LOADING_TST_LEVEL_START = 'LOADING_TST_LEVEL_START'
export const LOADING_TST_FACTOR_START = 'LOADING_TST_FACTOR_START'
export const LOADING_TST_FACTORS_START = 'LOADING_TST_FACTORS_START'
export const LOADING_TST_CONTRI_FACTOR_START = 'LOADING_TST_CONTRI_FACTOR_START'
export const LOADING_TST_QUESTION_START = 'LOADING_TST_QUESTION_START'
export const LOADING_TST_DISADVANTAGE_START = 'LOADING_TST_DISADVANTAGE_START'
export const SET_TST_HAVE_INIT_FALSE = 'SET_TST_HAVE_INIT_FALSE'

export const INIT_PAPER_ANSWER_CARD = 'INIT_PAPER_ANSWER_CARD'
export const INIT_PAPER_ANSWER_CARD_SUCCESS = 'INIT_PAPER_ANSWER_CARD_SUCCESS'
export const DISABLE_INIT_PAPER_ANSWER_CARD = 'DISABLE_INIT_PAPER_ANSWER_CARD'

export const INIT_TONGKAO_SUBJECT_QUESTION = 'INIT_TONGKAO_SUBJECT_QUESTION';
export const INIT_TONGKAO_SUBJECT_QUESTION_SUCCESS = 'INIT_TONGKAO_SUBJECT_QUESTION_SUCCESS';


export const CHANGE_TONGKAO_SUBJECT_INFO = 'CHANGE_TONGKAO_SUBJECT_INFO';
export const CHANGE_TONGKAO_SUBJECT_INFO_SUCCESS = 'CHANGE_TONGKAO_SUBJECT_INFO_SUCCESS';
export const CHANGE_SUBJECT_QUESTION_INFO_SUCCESS = 'CHANGE_SUBJECT_QUESTION_INFO_SUCCESS';
//================== 命题报告 ========================
export const INIT_EXAMINFO_SUCCESS = 'INIT_EXAMINFO_SUCCESS';
export const FETCH_SUBJECT_TOTAL_INFO_SUCCESS = 'FETCH_SUBJECT_TOTAL_INFO_SUCCESS';
export const FETCH_SUBJECT_INFO_SUCCESS = 'FETCH_SUBJECT_INFO_SUCCESS';
export const FETCH_QUESTION_INFO_SUCCESS = 'FETCH_QUESTION_INFO_SUCCESS';
export const CHANGE_SUBJECT_REQUEST = 'CHANGE_SUBJECT_REQUEST';

//================== 校内命题报告 ========================
export const INIT_STATE = 'INIT_STATE';

export const CHANGE_EXAMINFO_SUCCESS = 'CHANGE_EXAMINFO_SUCCESS'

export const INIT_TONGKAO_TEACHER = 'INIT_TONGKAO_TEACHER';
export const INIT_TONGKAO_TEACHER_SUCCESS = 'INIT_TONGKAO_TEACHER_SUCCESS';
export const UPDATE_TONGKAO_TEACHER_CACHE = 'UPDATE_TONGKAO_TEACHER_CACHE';
export const DESTROY_TONGKAO_TEACHER = 'DESTROY_TONGKAO_TEACHER';

export const TONGKAO_TEACHER_MODULE_KEYS = [{ key: 'BYMEAN', name: '按班级平均分分析'}, { key: 'BYSCORE', name: '按班级高分段分析'}, { key: 'BYGRADE', name: '按学科等级成绩分布分析' }, { key: 'BYSTEP', name: '按各分数段人数和比例分析'}, { key: 'BYLEVEL', name: '按上档人数和比例分析'}];
export const BY_MEAN = 'BYMEAN';
export const BY_SCORE = 'BYSCORE';
export const BY_GRADE = 'BYGRADE';
export const BY_STEP = 'BYSTEP';
export const BY_LEVEL = 'BYLEVEL';

export const TONGKAO_TEACHER_MODULE_REDIO_KEYS = [{ key: 'class', name: '每班分析'}, { key: 'teacher', name: '班级合并分析' }];




export const INIT_KNOWLEDGES = 'INIT_KNOWLEDGES';
export const INIT_KNOWLEDGES_SUCCESS = 'INIT_KNOWLEDGES_SUCCESS';
// export const UPDATE_TONGKAO_TEACHER_CACHE = 'UPDATE_TONGKAO_TEACHER_CACHE';
// export const DESTROY_TONGKAO_TEACHER = 'DESTROY_TONGKAO_TEACHER';

export const UPGRADE_POINT = {month: 7, day: 1};//注意moment的month是从0开始计算的
export const NORMAL_TYPE = 1;// 正常题
export const FUJIATI_TYPE = 2;// 附加题
export const SELECT_TYPE = 3;// 选做题
