// 
import cImg1 from './icon/1.svg'
import cImg2 from './icon/2.svg'
import cImg3 from './icon/3.svg'
import cImg4 from './icon/4.svg'
import cImg5 from './icon/5.png'
import cImg6 from './icon/6.svg'
import cImg7 from './icon/7.svg'
import cImg8 from './icon/8.svg'
import cImg9 from './icon/9.svg'
import cImg10 from './icon/10.svg'
import cImg11 from './icon/11.svg'
import cImg12 from './icon/12.svg'
import cImg13 from './icon/13.svg'
import cImg14 from './icon/14.svg'
import cImg15 from './icon/15.svg'
import cImg16 from './icon/16.svg'
import cImg17 from './icon/17.svg'
import cImg18 from './icon/18.svg'
import cImg19 from './icon/19.svg'
import cImg20 from './icon/20.svg'
import cImg21 from './icon/21.svg'
import cImg22 from './icon/22.svg'
import cImg23 from './icon/23.svg'
import cImg24 from './icon/24.svg'
import cImg25 from './icon/25.svg'
import cImg26 from './icon/26.svg'
import cImg27 from './icon/27.svg'
import cImg28 from './icon/28.svg'
import cImg29 from './icon/29.svg'
import cImg30 from './icon/30.svg'
import cImg31 from './icon/31.svg'
import cImg32 from './icon/32.svg'
import cImg33 from './icon/33.svg'
import cImg34 from './icon/34.svg'
import cImg35 from './icon/35.svg'
// 不可下钻
import dImg1 from './icon/1_grey.svg'
import dImg2 from './icon/2_grey.svg'
import dImg3 from './icon/3_grey.svg'
import dImg4 from './icon/4_grey.svg'
import dImg5 from './icon/5_grey.svg'
import dImg6 from './icon/6_grey.svg'
import dImg7 from './icon/7_grey.svg'
import dImg8 from './icon/8_grey.svg'
import dImg9 from './icon/9_grey.svg'
import dImg10 from './icon/10_grey.svg'
import dImg11 from './icon/11_grey.svg'
import dImg12 from './icon/12_grey.svg'
import dImg13 from './icon/13_grey.svg'
import dImg14 from './icon/14_grey.svg'
import dImg15 from './icon/15_grey.svg'
import dImg16 from './icon/16_grey.svg'
import dImg17 from './icon/17_grey.svg'
import dImg18 from './icon/18_grey.svg'
import dImg19 from './icon/19_grey.svg'
import dImg20 from './icon/20_grey.svg'
import dImg21 from './icon/21_grey.svg'
import dImg22 from './icon/22_grey.svg'
import dImg23 from './icon/23_grey.svg'
import dImg24 from './icon/24_grey.svg'
import dImg25 from './icon/25_grey.svg'
import dImg26 from './icon/26_grey.svg'
import dImg27 from './icon/27_grey.svg'
import dImg28 from './icon/28_grey.svg'
import dImg29 from './icon/29_grey.svg'
import dImg30 from './icon/30_grey.svg'
import dImg31 from './icon/31_grey.svg'
import dImg32 from './icon/32_grey.svg'
import dImg33 from './icon/33_grey.svg'
import dImg34 from './icon/34_grey.svg'
import dImg35 from './icon/35_grey.svg'




const configData = {
    svgRing: [
        { cx: 519, cy: 519, radius: 519, name: '业务' },
        { cx: 519, cy: 519, radius: 404, name: '生态' },
        { cx: 519, cy: 519, radius: 275, name: '安全' },
        { cx: 519, cy: 519, radius: 145, name: '基础' }
    ],
    positionData: {
        0: [
            { x: '440', y: '463' },
            { x: '531', y: '574' },
            { x: '609', y: '455' },
        ],
        1: [
            { x: '290', y: '483' },
            { x: '340', y: '364' },
            { x: '428', y: '291' },
            { x: '621', y: '281' },
            { x: '700', y: '328' },
            { x: '765', y: '463' },
            { x: '704', y: '578' },
            { x: '617', y: '676' },
            { x: '515', y: '691' },
            { x: '434', y: '665' },
            { x: '351', y: '608' },
        ],
        2: [
            { x: '189', y: '457' },
            { x: '240', y: '272' },
            { x: '379', y: '155' },
            { x: '689', y: '184' },
            { x: '803', y: '276' },
            { x: '872', y: '454' },
            { x: '814', y: '646' },
            { x: '704', y: '742' },
            { x: '546', y: '801' },
            { x: '416', y: '809' },
            { x: '290', y: '742' },
            { x: '212', y: '608' }
        ],
        3: [
            { x: '142', y: '166' },
            { x: '314', y: '40' },
            { x: '676', y: '28' },
            { x: '837', y: '109' },
            { x: '948', y: '260' },
            { x: '935', y: '753' },
            { x: '809', y: '860' },
            { x: '632', y: '907' },
            { x: '339', y: '908' },
        ]
    },
    icon: {
        currentIcon: [0, cImg1, cImg2, cImg3, cImg4, cImg5, cImg6, cImg7, cImg8, cImg9, cImg10, cImg11, cImg12, cImg13, cImg14, cImg15, cImg16, cImg17, cImg18, cImg19, cImg20, cImg21, cImg22, cImg23, cImg24, cImg25, cImg26, cImg27, cImg28, cImg29, cImg30, cImg31, cImg32, cImg33, cImg34, cImg35],
        defaultIcon: [0, dImg1, dImg2, dImg3, dImg4, dImg5, dImg6, dImg7, dImg8, dImg9, dImg10, dImg11, dImg12, dImg13, dImg14, dImg15, dImg16, dImg17, dImg18, dImg19, dImg20, dImg21, dImg22, dImg23, dImg24, dImg25, dImg26, dImg27, dImg28, dImg29, dImg30, dImg31, dImg32, dImg33, dImg34, dImg35]
    },
}

let sourceData = {
    "0": [{
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "0",
        "method_type": "template",
        "count_url": "/common/search/count/website_asset_device",
        "icon": "2",
        "format": {
            "condition": [],
            "title": "关联资产",
            "fields": [{
                "title": "设备名称",
                "key": "name"
            },
            {
                "title": "重要性",
                "key": "importance"
            },
            {
                "title": "所属单位",
                "key": "name2"
            },
            {
                "title": "网卡_1 IP",
                "key": "net_card_one_ip"
            },
            {
                "title": "网卡_2 IP",
                "key": "net_card_two_ip"
            },
            {
                "title": "设备类型",
                "key": "type"
            },
            {
                "title": "设备子类型",
                "key": "sub_type"
            },
            {
                "title": "操作系统",
                "key": "os"
            },
            {
                "title": "所属机房",
                "key": "computer_room"
            },
            {
                "title": "操作",
                "type": "action",
                "actions": [{
                    "method": {
                        "param": {
                            "id": {
                                "type": "line",
                                "key": "id"
                            }
                        },
                        "type": "template",
                        "target": "asset_device_detail"
                    },
                    "name": "详情"
                }],
                "key": ""
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/website_asset_device",
        "name": "关联资产",
        "id": "website_asset_device",
        "method_code": "website_asset_device",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "system_id",
        "cyc_group": "0",
        "method_type": "template",
        "count_url": "/common/search/count/website_company",
        "icon": "3",
        "format": {
            "blocks": [{
                "title": "",
                "type": "form",
                "fields": [{
                    "title": "单位全称",
                    "key": "full_name"
                },
                {
                    "title": "是否为关基单位",
                    "key": "is_infrastructure"
                },
                {
                    "title": "所属行业",
                    "key": "industry"
                },
                {
                    "title": "上级单位",
                    "key": "superior_company"
                },
                {
                    "title": "单位地址",
                    "key": "address"
                },
                {
                    "title": "行业主管部门",
                    "key": "department_industry"
                },
                {
                    "title": "统一社会信用代码",
                    "key": "credit_code"
                },
                {
                    "width": "24",
                    "title": "单位描述",
                    "key": "description"
                }
                ]
            },
            {
                "from": "unit_leader",
                "title": "单位负责人",
                "type": "list",
                "fields": [{
                    "title": "姓名",
                    "key": "name"
                },
                {
                    "title": "职务",
                    "key": "position"
                },
                {
                    "title": "电话",
                    "key": "tel"
                },
                {
                    "title": "手机号",
                    "key": "phone"
                },
                {
                    "title": "邮箱",
                    "key": "email"
                }
                ]
            },
            {
                "from": "unit_linkman",
                "title": "单位联系人",
                "type": "list",
                "fields": [{
                    "title": "姓名",
                    "key": "name"
                },
                {
                    "title": "职务",
                    "key": "position"
                },
                {
                    "title": "电话",
                    "key": "tel"
                },
                {
                    "title": "手机号",
                    "key": "phone"
                },
                {
                    "title": "邮箱",
                    "key": "email"
                }
                ]
            },
            {
                "from": "safety_leader",
                "title": "网络安全分管领导",
                "type": "list",
                "fields": [{
                    "title": "姓名",
                    "key": "name"
                },
                {
                    "title": "职务",
                    "key": "position"
                },
                {
                    "title": "电话",
                    "key": "tel"
                },
                {
                    "title": "手机号",
                    "key": "phone"
                },
                {
                    "title": "邮箱",
                    "key": "email"
                }
                ]
            },
            {
                "from": "authority_leader",
                "title": "网络安全主管部门领导",
                "type": "list",
                "fields": [{
                    "title": "部门名称",
                    "key": "department"
                },
                {
                    "title": "姓名",
                    "key": "name"
                },
                {
                    "title": "职务",
                    "key": "position"
                },
                {
                    "title": "电话",
                    "key": "tel"
                },
                {
                    "title": "手机号",
                    "key": "phone"
                },
                {
                    "title": "邮箱",
                    "key": "email"
                }
                ]
            },
            {
                "from": "authority_linkman",
                "title": "网络安全主管部门联系人",
                "type": "list",
                "fields": [{
                    "title": "姓名",
                    "key": "name"
                },
                {
                    "title": "职务",
                    "key": "position"
                },
                {
                    "title": "电话",
                    "key": "tel"
                },
                {
                    "title": "手机号",
                    "key": "phone"
                },
                {
                    "title": "邮箱",
                    "key": "email"
                }
                ]
            }
            ],
            "defalut_width": "8",
            "title": ""
        },
        "type": "form",
        "is_show": 1,
        "list_url": "/company/portrait/info",
        "name": "责任单位",
        "id": "website_company",
        "method_code": "website_company",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "0",
        "method_type": "fileList",
        "count_url": "/common/search/count/topological_graph",
        "icon": "1",
        "format": null,
        "type": "fileList",
        "is_show": 1,
        "list_url": "/common/search/file/topological_graph",
        "name": "拓扑结构图",
        "id": "topological_graph",
        "method_code": null,
        "order": null
    }
    ],
    "1": [{
        "is_active": 1,
        "param_code": "system_id",
        "cyc_group": "1",
        "method_type": "template",
        "count_url": "/common/search/count/website_event",
        "icon": "4",
        "format": {
            "condition": [{
                "comp": "datetimerange",
                "default": "30",
                "end_key": "end_time",
                "start_key": "start_time",
                "options": [{
                    "label": "近24小时",
                    "value": "1"
                },
                {
                    "label": "近7天",
                    "value": "7"
                },
                {
                    "label": "近30天",
                    "value": "30"
                }
                ],
                "label": "时间范围"
            },
            {
                "comp": "level_select",
                "main_select": {
                    "default": "",
                    "has_all": true,
                    "label": "事件一级分类",
                    "key": "type"
                },
                "dict": "event_type",
                "sub_select": {
                    "default": "",
                    "has_all": true,
                    "label": "事件二级分类",
                    "key": "sub_type"
                }
            },
            {
                "comp": "select",
                "default": "",
                "has_all": true,
                "dict": "event_level",
                "label": "事件等级",
                "key": "level"
            },
            {
                "comp": "select",
                "default": "",
                "has_all": true,
                "dict": "disposal_status",
                "label": "通报状态",
                "key": "deal_status"
            }
            ],
            "title": "受攻击情况",
            "fields": [{
                "title": "事件名称",
                "key": "title"
            },
            {
                "title": "发现时间",
                "key": "found_time"
            },
            {
                "title": "受害者实体",
                "key": "victim"
            },
            {
                "title": "事件级别",
                "key": "level"
            },
            {
                "title": "一级分类",
                "key": "event_type"
            },
            {
                "title": "二级分类",
                "key": "event_subtype"
            },
            {
                "title": "处置状态",
                "key": "disposal_status"
            },
            {
                "title": "操作",
                "type": "action",
                "actions": [{
                    "method": {
                        "param": {
                            "event_id": {
                                "type": "line",
                                "key": "id"
                            }
                        },
                        "type": "template",
                        "target": "event_detail"
                    },
                    "name": "详情"
                }],
                "key": ""
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/event/list",
        "name": "受攻击情况",
        "id": "website_event",
        "method_code": "website_event",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "1",
        "method_type": "template",
        "count_url": "/common/search/count/website_alarm",
        "icon": "7",
        "format": {
            "condition": [{
                "comp": "datetimerange",
                "default": "30",
                "end_key": "end_time",
                "start_key": "start_time",
                "options": [{
                    "label": "近24小时",
                    "value": "1"
                },
                {
                    "label": "近7天",
                    "value": "7"
                },
                {
                    "label": "近30天",
                    "value": "30"
                }
                ],
                "label": "时间范围"
            },
            {
                "comp": "level_select",
                "main_select": {
                    "default": "",
                    "has_all": true,
                    "label": "告警一级分类",
                    "key": "type"
                },
                "dict": "alarm_type",
                "sub_select": {
                    "default": "",
                    "has_all": true,
                    "label": "告警二级分类",
                    "key": "sub_type"
                }
            },
            {
                "comp": "select",
                "default": "",
                "has_all": true,
                "dict": "alarm_level",
                "label": "告警等级",
                "key": "alarm_level"
            }
            ],
            "title": "威胁情况",
            "fields": [{
                "title": "告警名称",
                "key": "name"
            },
            {
                "title": "受害者IP",
                "key": "victim_ip"
            },
            {
                "title": "攻击者IP",
                "key": "attacker_ip"
            },
            {
                "title": "受害者网站域名",
                "key": "website_name"
            },
            {
                "title": "受害者网站URL",
                "key": "website_url"
            },
            {
                "title": "告警一级分类",
                "key": "alarm_type"
            },
            {
                "title": "告警二级分类",
                "key": "alarm_subtype"
            },
            {
                "title": "告警等级",
                "key": "alarm_level"
            },
            {
                "title": "告警次数",
                "key": "alarm_times"
            },
            {
                "width": 60,
                "title": "操作",
                "type": "action",
                "actions": [{
                    "method": {
                        "param": {
                            "alarm_id": {
                                "type": "line",
                                "key": "id"
                            }
                        },
                        "type": "template",
                        "target": "alarm_detail"
                    },
                    "name": "详情"
                }],
                "key": ""
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/website_alarm",
        "name": "威胁情况",
        "id": "website_alarm",
        "method_code": "website_alarm",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "1",
        "method_type": "template",
        "count_url": "/common/search/count/website_vulnerability",
        "icon": "8",
        "format": {
            "condition": [{
                "comp": "datetimerange",
                "default": "30",
                "end_key": "end_time",
                "start_key": "start_time",
                "options": [{
                    "label": "近24小时",
                    "value": "1"
                },
                {
                    "label": "近7天",
                    "value": "7"
                },
                {
                    "label": "近30天",
                    "value": "30"
                }
                ],
                "label": "时间范围"
            },
            {
                "comp": "select",
                "default": "",
                "has_all": true,
                "dict": "vulnerability_level",
                "label": "危害等级",
                "key": "level"
            },
            {
                "comp": "select",
                "default": "",
                "has_all": true,
                "dict": "vulnerability_status",
                "label": "修复状态",
                "key": "status"
            }
            ],
            "title": "脆弱性",
            "fields": [{
                "title": "漏洞名称",
                "key": "name"
            },
            {
                "title": "漏洞类型",
                "key": "type_zh"
            },
            {
                "title": "危害等级",
                "key": "threat_level"
            },
            {
                "title": "受影响资产",
                "key": "asset_name"
            },
            {
                "title": "数据来源",
                "key": "source"
            },
            {
                "title": "发现时间",
                "key": "found_time"
            },
            {
                "title": "修复状态",
                "key": "status"
            },
            {
                "title": "操作",
                "type": "action",
                "actions": [{
                    "method": {
                        "param": {
                            "id": {
                                "type": "line",
                                "key": "id"
                            }
                        },
                        "type": "template",
                        "target": "vulnerability_detail"
                    },
                    "name": "详情"
                }],
                "key": ""
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/website_vulnerability",
        "name": "脆弱性",
        "id": "website_vulnerability",
        "method_code": "website_vulnerability",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "1",
        "method_type": "template",
        "count_url": "/common/search/count/cyc_contingency_plan",
        "icon": "11",
        "format": {
            "condition": [],
            "title": "应急预案",
            "fields": [{
                "title": "系统名称",
                "key": "website_name"
            },
            {
                "method": {
                    "param": {
                        "id": {
                            "type": "line",
                            "key": "attach_id"
                        }
                    },
                    "type": "file",
                    "title": "应急预案详情",
                    "target": ""
                },
                "title": "预案",
                "key": "file_name"
            },
            {
                "title": "应急支援单位",
                "key": "support_company"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/cyc_contingency_plan",
        "name": "应急预案",
        "id": "cyc_contingency_plan",
        "method_code": "cyc_contingency_plan",
        "order": null
    },
    {
        "is_active": 0,
        "param_code": null,
        "cyc_group": "1",
        "method_type": null,
        "count_url": null,
        "icon": "10",
        "format": null,
        "type": null,
        "is_show": 1,
        "list_url": null,
        "name": "网站安全风险评估",
        "id": "cyc_network_sec_check",
        "method_code": null,
        "order": null
    },
    {
        "is_active": 0,
        "param_code": null,
        "cyc_group": "1",
        "method_type": null,
        "count_url": null,
        "icon": "9",
        "format": null,
        "type": null,
        "is_show": 1,
        "list_url": null,
        "name": "攻击者情况",
        "id": "cyc_attacker_info",
        "method_code": null,
        "order": null
    },
    {
        "is_active": 0,
        "param_code": null,
        "cyc_group": "1",
        "method_type": null,
        "count_url": null,
        "icon": "9",
        "format": null,
        "type": null,
        "is_show": 1,
        "list_url": null,
        "name": "网络暴露面",
        "id": "cyc_network_expose",
        "method_code": null,
        "order": null
    },
    {
        "is_active": 0,
        "param_code": null,
        "cyc_group": "1",
        "method_type": null,
        "count_url": null,
        "icon": "9",
        "format": null,
        "type": null,
        "is_show": 1,
        "list_url": null,
        "name": "安全防护措施",
        "id": "cyc_sec_method",
        "method_code": null,
        "order": null
    },
    {
        "is_active": 0,
        "param_code": null,
        "cyc_group": "1",
        "method_type": null,
        "count_url": null,
        "icon": "9",
        "format": null,
        "type": null,
        "is_show": 1,
        "list_url": null,
        "name": "系统安全自查",
        "id": "cyc_system_sec_check",
        "method_code": null,
        "order": null
    },
    {
        "is_active": 0,
        "param_code": null,
        "cyc_group": "1",
        "method_type": null,
        "count_url": null,
        "icon": "6",
        "format": null,
        "type": null,
        "is_show": 1,
        "list_url": null,
        "name": "网站安全",
        "id": "cyc_website_check",
        "method_code": null,
        "order": null
    },
    {
        "is_active": 0,
        "param_code": null,
        "cyc_group": "1",
        "method_type": null,
        "count_url": null,
        "icon": "5",
        "format": null,
        "type": null,
        "is_show": 1,
        "list_url": null,
        "name": "备份与恢复",
        "id": "cyc_backup",
        "method_code": null,
        "order": null
    }
    ],
    "2": [{
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "2",
        "method_type": "template",
        "count_url": "/common/search/count/website_portrait_domain_hosting_organization",
        "icon": "22",
        "format": {
            "condition": [],
            "title": "域名托管机构",
            "fields": [{
                "title": "域名托管机构",
                "key": "name"
            },
            {
                "title": "联系人",
                "key": "contact"
            },
            {
                "title": "电话",
                "key": "tel"
            },
            {
                "title": "手机号",
                "key": "phone"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/website_portrait_domain_hosting_organization",
        "name": "域名托管机构",
        "id": "8",
        "method_code": "8",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "2",
        "method_type": "template",
        "count_url": "/common/search/count/cyc_construct",
        "icon": "19",
        "format": {
            "condition": [],
            "title": "建设单位",
            "fields": [{
                "title": "建设单位",
                "key": "name"
            },
            {
                "title": "联系人",
                "key": "contact"
            },
            {
                "title": "电话",
                "key": "tel"
            },
            {
                "title": "手机号",
                "key": "phone"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/cyc_construct",
        "name": "建设单位",
        "id": "cyc_construct",
        "method_code": "cyc_construct",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "2",
        "method_type": "template",
        "count_url": "/common/search/count/cyc_degsin",
        "icon": "16",
        "format": {
            "condition": [],
            "title": "设计单位",
            "fields": [{
                "title": "设计单位",
                "key": "name"
            },
            {
                "title": "联系人",
                "key": "contact"
            },
            {
                "title": "电话",
                "key": "tel"
            },
            {
                "title": "手机号",
                "key": "phone"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/cyc_degsin",
        "name": "设计单位",
        "id": "cyc_degsin",
        "method_code": "cyc_degsin",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "2",
        "method_type": "template",
        "count_url": "/common/search/count/cyc_devops",
        "icon": "17",
        "format": {
            "condition": [],
            "title": "运维单位",
            "fields": [{
                "title": "运维单位",
                "key": "name"
            },
            {
                "title": "联系人",
                "key": "contact"
            },
            {
                "title": "电话",
                "key": "tel"
            },
            {
                "title": "手机号",
                "key": "phone"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/cyc_devops",
        "name": "运维单位",
        "id": "cyc_devops",
        "method_code": "cyc_devops",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "2",
        "method_type": "template",
        "count_url": "/common/search/count/cyc_dns",
        "icon": "20",
        "format": {
            "condition": [],
            "title": "域名解析机构",
            "fields": [{
                "title": "域名解析机构",
                "key": "name"
            },
            {
                "title": "联系人",
                "key": "contact"
            },
            {
                "title": "电话",
                "key": "tel"
            },
            {
                "title": "手机号",
                "key": "phone"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/cyc_dns",
        "name": "域名解析机构",
        "id": "cyc_dns",
        "method_code": "cyc_dns",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "2",
        "method_type": "template",
        "count_url": "/common/search/count/cyc_domain_registration",
        "icon": "21",
        "format": {
            "condition": [],
            "title": "域名注册机构",
            "fields": [{
                "title": "域名注册机构",
                "key": "name"
            },
            {
                "title": "联系人",
                "key": "contact"
            },
            {
                "title": "电话",
                "key": "tel"
            },
            {
                "title": "手机号",
                "key": "phone"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/cyc_domain_registration",
        "name": "域名注册机构",
        "id": "cyc_domain_registration",
        "method_code": "cyc_domain_registration",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "2",
        "method_type": "template",
        "count_url": "/common/search/count/cyc_cdn",
        "icon": "18",
        "format": {
            "condition": [],
            "title": "CDN服务商",
            "fields": [{
                "title": "CDN服务商",
                "key": "name"
            },
            {
                "title": "联系人",
                "key": "contact"
            },
            {
                "title": "电话",
                "key": "tel"
            },
            {
                "title": "手机号",
                "key": "phone"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/cyc_cdn",
        "name": "CDN服务商",
        "id": "cyc_cdn",
        "method_code": "cyc_cdn",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "2",
        "method_type": "template",
        "count_url": "/common/search/count/cyc_cloud_control",
        "icon": "14",
        "format": {
            "condition": [],
            "title": "云端监测服务商",
            "fields": [{
                "title": "云端监测服务商",
                "key": "name"
            },
            {
                "title": "联系人",
                "key": "contact"
            },
            {
                "title": "电话",
                "key": "tel"
            },
            {
                "title": "手机号",
                "key": "phone"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/cyc_cloud_control",
        "name": "云端监测服务商",
        "id": "cyc_cloud_control",
        "method_code": "cyc_cloud_control",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "2",
        "method_type": "template",
        "count_url": "/common/search/count/cyc_cloud_protect",
        "icon": "23",
        "format": {
            "condition": [],
            "title": "云端防护服务商",
            "fields": [{
                "title": "云端防护服务商",
                "key": "name"
            },
            {
                "title": "联系人",
                "key": "contact"
            },
            {
                "title": "电话",
                "key": "tel"
            },
            {
                "title": "手机号",
                "key": "phone"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/cyc_cloud_protect",
        "name": "云端防护服务商",
        "id": "cyc_cloud_protect",
        "method_code": "cyc_cloud_protect",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "2",
        "method_type": "template",
        "count_url": "/common/search/count/cyc_security_service",
        "icon": "12",
        "format": {
            "condition": [],
            "title": "安全服务单位",
            "fields": [{
                "title": "安全服务单位",
                "key": "name"
            },
            {
                "title": "联系人",
                "key": "contact"
            },
            {
                "title": "电话",
                "key": "tel"
            },
            {
                "title": "手机号",
                "key": "phone"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/cyc_security_service",
        "name": "安全服务单位",
        "id": "cyc_security_service",
        "method_code": "cyc_security_service",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "2",
        "method_type": "template",
        "count_url": "/common/search/count/cyc_support",
        "icon": "13",
        "format": {
            "condition": [],
            "title": "支撑单位",
            "fields": [{
                "title": "支撑单位",
                "key": "name"
            },
            {
                "title": "联系人",
                "key": "contact"
            },
            {
                "title": "电话",
                "key": "tel"
            },
            {
                "title": "手机号",
                "key": "phone"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/cyc_support",
        "name": "支撑单位",
        "id": "cyc_support",
        "method_code": "cyc_support",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "2",
        "method_type": "template",
        "count_url": "/common/search/count/cyc_assess",
        "icon": "15",
        "format": {
            "condition": [],
            "title": "测评机构",
            "fields": [{
                "title": "测评机构",
                "key": "name"
            },
            {
                "title": "联系人",
                "key": "contact"
            },
            {
                "title": "电话",
                "key": "tel"
            },
            {
                "title": "手机号",
                "key": "phone"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/cyc_assess",
        "name": "测评机构",
        "id": "cyc_assess",
        "method_code": "cyc_assess",
        "order": null
    }
    ],
    "3": [{
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "3",
        "method_type": "template",
        "count_url": "/common/search/count/website_portrait_domain_register_record",
        "icon": "28",
        "format": {
            "condition": [],
            "title": "域名注册记录",
            "fields": [{
                "title": "系统名称",
                "key": "website_name"
            },
            {
                "title": "系统域名",
                "key": "website_domain"
            },
            {
                "title": "访问地址",
                "key": "access_address"
            },
            {
                "title": "DNS",
                "key": "dns"
            },
            {
                "title": "域名注册时间",
                "key": "domain_register_time"
            },
            {
                "title": "域名注册国家",
                "key": "domain_register_country"
            },
            {
                "title": "域名服务器",
                "key": "domain_server"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/website_portrait_domain_register_record",
        "name": "域名注册记录",
        "id": "9",
        "method_code": "9",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "system_id",
        "cyc_group": "3",
        "method_type": "template",
        "count_url": "/common/search/count/common_portrait_police_record",
        "icon": "27",
        "format": {
            "condition": [],
            "title": "公安备案信息",
            "fields": [{
                "title": "备案信息名称",
                "key": "website_name"
            },
            {
                "title": "备案状态",
                "key": "record_status_zh"
            },
            {
                "title": "公安机关备案号",
                "key": "police_record_number"
            },
            {
                "title": "备案地",
                "key": "record_address"
            },
            {
                "title": "备案时间",
                "key": "record_time"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/common_portrait_police_record",
        "name": "公安备案信息",
        "id": "2",
        "method_code": "2",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "system_id",
        "cyc_group": "3",
        "method_type": "template",
        "count_url": "/common/search/count/common_portrait_grade_protect_appraisal",
        "icon": "29",
        "format": {
            "condition": [],
            "title": "等保测评记录",
            "fields": [{
                "title": "系统名称",
                "key": "website_name"
            },
            {
                "title": "等保级别",
                "key": "protect_level_zh"
            },
            {
                "title": "测评编号",
                "key": "appraisal_number"
            },
            {
                "title": "测评时间",
                "key": "appraisal_time"
            },
            {
                "title": "测评机构",
                "key": "appraisal_organization"
            },
            {
                "title": "测评师",
                "key": "appraisal_people"
            },
            {
                "title": "测评分值",
                "key": "appraisal_score"
            },
            {
                "title": "测评结果",
                "key": "appraisal_result_zh"
            },
            {
                "method": {
                    "param": {
                        "id": {
                            "type": "line",
                            "key": "attach_id"
                        }
                    },
                    "type": "file",
                    "target": ""
                },
                "title": "测评报告",
                "key": "file_name"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/common_portrait_grade_protect_appraisal",
        "name": "等保测评记录",
        "id": "4",
        "method_code": "4",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "system_id",
        "cyc_group": "3",
        "method_type": "template",
        "count_url": "/common/search/count/common_portrait_task_check_record",
        "icon": "24",
        "format": {
            "condition": [],
            "title": "重保检查记录",
            "fields": [{
                "title": "重保任务",
                "key": "task_name"
            },
            {
                "title": "检查任务名称",
                "key": "check_name"
            },
            {
                "title": "检查周期",
                "key": "check_cycle"
            },
            {
                "title": "检查人",
                "key": "check_people"
            },
            {
                "title": "检查时间",
                "key": "check_time"
            },
            {
                "title": "发现问题数",
                "key": "problems"
            },
            {
                "title": "整改数",
                "key": "rectification"
            },
            {
                "title": "结果报告文档",
                "type": "action",
                "actions": [{
                    "method": {
                        "param": {
                            "id": {
                                "type": "line",
                                "key": "id"
                            }
                        },
                        "type": "template",
                        "target": "common_portrait_task_check_record_attach"
                    },
                    "name": "结果报告"
                }],
                "key": ""
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/common_portrait_task_check_record",
        "name": "重保检查记录",
        "id": "5",
        "method_code": "5",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "3",
        "method_type": "template",
        "count_url": "/common/search/count/website_notification",
        "icon": "25",
        "format": {
            "condition": [],
            "title": "通报处置记录",
            "fields": [{
                "title": "通报时间",
                "key": "notification_time"
            },
            {
                "title": "通报类型",
                "key": "notification_type_zh"
            },
            {
                "title": "被通报单位",
                "key": "company_name"
            },
            {
                "title": "整改期限",
                "key": "rectification_time"
            },
            {
                "title": "事件类型",
                "key": "notification_event_type_zh"
            },
            {
                "title": "事件级别",
                "key": "notification_event_threat_level"
            },
            {
                "title": "通报状态",
                "key": "notification_status"
            },
            {
                "title": "操作",
                "type": "action",
                "actions": [{
                    "method": {
                        "param": {
                            "notificationId": {
                                "type": "line",
                                "key": "id"
                            }
                        },
                        "type": "template",
                        "target": "notification_detail"
                    },
                    "name": "详情"
                }],
                "key": ""
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/website_notification",
        "name": "通报处置记录",
        "id": "6",
        "method_code": "6",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "system_id",
        "cyc_group": "3",
        "method_type": "template",
        "count_url": "/common/search/count/common_portrait_icp_record",
        "icon": "30",
        "format": {
            "condition": [],
            "title": "ICP备案信息",
            "fields": [{
                "title": "备案系统名称",
                "key": "website_name"
            },
            {
                "title": "ICP备案状态",
                "key": "icp_record_status_zh"
            },
            {
                "title": "ICP备案号",
                "key": "icp_record_number"
            },
            {
                "title": "系统备案主办单位名称",
                "key": "sponsor"
            },
            {
                "title": "系统备案负责人",
                "key": "website_record_principal"
            },
            {
                "title": "主办单位性质",
                "key": "sponsor_type_zh"
            },
            {
                "title": "备案通过时间",
                "key": "approve_time"
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/common_portrait_icp_record",
        "name": "ICP备案信息",
        "id": "3",
        "method_code": "3",
        "order": null
    },
    {
        "is_active": 1,
        "param_code": "id",
        "cyc_group": "3",
        "method_type": "template",
        "count_url": "/common/search/count/website_portrait_protect_check_record_main",
        "icon": "26",
        "format": {
            "condition": [],
            "title": "等保检查记录",
            "fields": [{
                "title": "检号",
                "key": "check_num"
            },
            {
                "title": "涉及系统数量",
                "key": "involve_system"
            },
            {
                "title": "检查通知时间",
                "key": "check_time"
            },
            {
                "title": "检查类型",
                "key": "check_type_zh"
            },
            {
                "title": "检查人员",
                "key": "check_people"
            },
            {
                "title": "操作",
                "type": "action",
                "actions": [{
                    "method": {
                        "param": {
                            "system_id": {
                                "type": "line",
                                "key": "object_id"
                            },
                            "check_record_id": {
                                "type": "line",
                                "key": "id"
                            }
                        },
                        "type": "unique",
                        "target": "protect_check_detail"
                    },
                    "name": "详情"
                }],
                "key": ""
            }
            ]
        },
        "type": "list",
        "is_show": 1,
        "list_url": "/common/search/website_portrait_protect_check_record_main",
        "name": "等保检查记录",
        "id": "7",
        "method_code": "7",
        "order": null
    },
    {
        "is_active": 0,
        "param_code": null,
        "cyc_group": "3",
        "method_type": null,
        "count_url": null,
        "icon": "32",
        "format": null,
        "type": null,
        "is_show": 1,
        "list_url": null,
        "name": "关基安全检查",
        "id": "cyc_inf_check",
        "method_code": null,
        "order": null
    },
    {
        "is_active": 0,
        "param_code": null,
        "cyc_group": "3",
        "method_type": null,
        "count_url": null,
        "icon": "31",
        "format": null,
        "type": null,
        "is_show": 1,
        "list_url": null,
        "name": "安全技术监测",
        "id": "cyc_sec_tec_control",
        "method_code": null,
        "order": null
    }
    ]
}

export default {
    configData,
    sourceData
}