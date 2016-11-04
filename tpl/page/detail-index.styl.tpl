.ur-${modName}-${pageName}
    padding-bottom: 5rem
    background-color: $-melon-colors.grey200

    >header
        height: 4rem
        display: flex
        align-items: center;
        justify-content: center;
        background-color: #fff

        >.ui-title
            width: 60rem

    &-step-container
        display: flex;
        flex-direction: column;
        width: 60rem
        box-sizing: border-box;
        margin: 2rem auto 0
        padding: 1rem 0
        background-color: #fff

    &-step-section

        >h4
            line-height: 2rem
            border-bottom: 1px solid $-melon-colors.grey300
            padding: 0 0 0.5rem
            font-weight: 700

        >div
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 1rem

        >footer
            margin-top: 1rem
            padding: 1rem 0

            >.ui-button
                margin-right: 0.5rem

    &-step
        display: flex;
        flex-direction: row;
        margin-bottom: 1rem;

        >i
            display: block;
            background-color: $-melon-colors.blue500
            margin: 0.5rem
            border-radius: 50%
            width: 2rem;
            height: 2rem;
            text-align: center;
            line-height: 2rem;
            color: #fff;
            font-style: normal;

        >div
            flex: 1;
            padding-top: 0.5rem

    &-field
        flex: 0 0 50%;
        box-sizing: border-box;
        margin-top: 1rem
        padding-bottom: 0.5rem
        padding-right: 1rem;
        clearfix();

        &.variant-fluid
            flex: 1 0 100%

        .ui-select
            margin-top: 13px

        .ui-uploader
            margin-top: 1rem
            .ui-button
                margin-left: -0.6rem

        .ui-toggle
            float: left;
            margin-top: 1.425rem

        .ui-calendar.variant-inline
            margin-left: 1rem

// @require './component/Basic.styl'
