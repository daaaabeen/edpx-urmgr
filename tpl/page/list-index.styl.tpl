.ur-${modName}-${pageName}
    background-color: $-melon-colors.grey300
    padding-bottom: 2rem;

    >header
        background-color: $-melon-colors.white

        >div
            height: 4em
            max-width: 1000px
            box-sizing: border-box;
            margin: 0 auto
            display: flex
            box-sizing: border-box
            flex-direction: row
            align-items: center

            >label
                flex-grow: 1

            >div >.ui-tooltip
                margin-left: 0.5rem

    >.ur-${modName}-${pageName}-content
        max-width: 1000px
        display: flex
        flex-direction: row
        margin: 2rem auto 0;

        >section
            flex-grow: 1
            background-color: #fff
            padding-bottom: 5rem;

            .ui-table-row
                transition: background-color .3s

            .ui-table-cell-wrap3
                padding-left: 1rem

    .order-col-wrap
        cursor: pointer
        .order-btn
            display: inline-block
            vertical-align: bottom

            width: 0.875rem
            height: 0.875rem
            margin-left: -0.875rem
            padding-right: 0.2rem

            cursor: pointer

            .icon-arrow
                display: inline-block

                width: 0.875rem
                height: 0.875rem

        .order-btn.hidden
            .icon-arrow
                display: none

    .order-col-wrap:hover
        .order-btn.hidden
            .icon-arrow
                display: inline-block
                fill: #999

    .rank-wraper
        button
            padding: 0 5px
        .rank-value
            margin: 0 5px
            vertical-align: middle

    .ui-table-cell
        .ui-select-label
            width: 60px
            text-overflow: ellipsis
            white-space: nowrap
            overflow: hidden
